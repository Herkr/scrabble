import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TopList from './TopList';
import Alphabet from '../components/Alphabet';
import UserContext from './UserContext';
import { UserProvider } from './UserContext';
import IsMultipleInArray from '../components/IsMultipleInArray';
import removeItem from '../components/RemoveItem';
import getAllInputItems from '../components/GetAllInputItems';
import getScoreForWord from '../components/GetScoreForWord';
import totalScore from '../components/TotalScore';
import shuffleWord from '../components/ShuffleWord';
import getArrayOfTrueWords from '../components/GetArrayOfTrueWords';
import getShuffledWordFromDictionary from '../components/GetShuffledWordFromDictionary';
import 'font-awesome/css/font-awesome.min.css';
import getAllExceptYellowWords from '../components/GetAllExceptYellowWords';
import Dictionary from '../json/Dictionary-seven.json';
import missingWords from '../components/MissingWords';

function Scrabble() {
  var wordsFromDictionary = Object.keys(Dictionary);

  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const isLoadingTrue = () => {
    // disable leita button
    document.getElementById("btn").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById("word").disabled = true;
    setLoading(true);
    setGameOver(true);

    // wait 0,7 sek to actually click and go to top 10 list
    // to get 'loading' visible before button is clicked
    setTimeout(() => {
      document.getElementById('link').click();
    }, 700);
  }

  const isLoadingFalse = () => {
    setLoading(false);
  }

  //context state frá App.js
  const level = useContext(UserContext);

  // get the tiles to show on screen
  var randomLettersBefore = shuffleWord(getShuffledWordFromDictionary(level, wordsFromDictionary));
  const [randomLetters, setRandomLetters] = useState(randomLettersBefore);
  var tiles = getTiles(randomLetters); 

  // localstorage
  const wordArray = () => window.localStorage.getItem('word') || '';
  const [word, setWord] = useState(wordArray);
  const addWord = () => {
    // to keep the random word from not changing
    var newRandomWord = randomLetters;
    setRandomLetters(newRandomWord);
    setLettersToUse(newRandomWord);
    var inputWord = document.getElementById('word').value.toLowerCase();
    // clear input field when 'leita' button pressed
    document.getElementById('word').value = "";
    
    return setWord(inputWord + ' ' + word);
  }

  // if same letter is written multiple times
  const [lettersToUse, setLettersToUse] = useState(randomLetters);
  
  const restrictKey = event => {
    var newRandomWord = [];
    newRandomWord = randomLetters;
    var inputW = document.getElementById('word').value.toLowerCase();
    for (let i = newRandomWord.length -1; i >= 0; i--) {
      // add word when enter is clicked
      if(event.key === 'Enter') 
      {
        document.getElementById('btn').click();
        // clear input field
        document.getElementById('word').value = "";
        return;
      }
      // if key event is part of the random letters
      if((event.key === newRandomWord[i] || event.key.toUpperCase() === newRandomWord[i].toUpperCase()) 
        && lettersToUse.includes(newRandomWord[i]))
      {
        setLettersToUse(removeItem(lettersToUse, newRandomWord[i]));
        return;
      }
    }

    // delete letter in lettersToUse when delete pressed
    if((event.key === 'Delete' || event.key === 'Backspace') && inputW.length > 0)
    {
      setLettersToUse(lettersToUse + inputW[inputW.length-1]);
      return;
    }

    // no letter is written in textbox
    return event.preventDefault();
  }

  // array with the true words from the dictionary
  const trueWordsInserted = getArrayOfTrueWords(word, wordsFromDictionary);
  var allWords = getAllInputItems(word);

  function showAlert(word){
  if (word.length !== 0)
  {
    if (trueWordsInserted.includes(word))
    {
      if (IsMultipleInArray(allWords, word) === false)
      {
        return (
          <div className="App-greenAlert">
            "{word}" funnið! Tú hevur fingið {getScoreForWord(word, wordsFromDictionary)} stig :)
          </div>
        );
      }
      else
      {
        return (
          <div className="App-yellowAlert">
            "{word}" er longu funnið
          </div>
        );
      }
    }
    else
    {
      return (
        <div className="App-redAlert">
          "{word}" ikki funnið! Tú missir 1 stig :(
        </div>
      );
    }
  }
  
  return;
}

const allWordsExceptYellow = getAllExceptYellowWords(word, wordsFromDictionary);
const score = totalScore(allWordsExceptYellow, wordsFromDictionary);
const countTrueWords = trueWordsInserted.length;
const numberOfMissingWords = missingWords(trueWordsInserted, randomLetters, wordsFromDictionary).length;
  
  return (
      <Router>
        <div>
          <h1 className='App-score'>Stig: {score} | Orð: {countTrueWords}</h1>
          <h3>Tú manglar {numberOfMissingWords} orð</h3>
          <input type='text' name='word' id='word' className= 'App-input-box' maxLength={level} placeholder='Skriva orð her' autoComplete="off" onKeyDown={(event) => restrictKey(event)} />
          <input type="submit" onClick={addWord} value="Leita" id ='btn' className='App-button' />
          
          <h3>Finn so nógv orð sum gjørligt burturúr bókstavunum niðanfyri</h3>
          
          <p>{tiles}</p>
          <h2>{showAlert(word.substr(0,word.indexOf(' ')))}</h2>
          
          <h2 className="font-color-green">funnin orð: {trueWordsInserted.join(', ')}</h2>
          <h3>Um øll orðini eru funnin, verða {level*25} eyka stig givin</h3>
          
          <button className="App-button" id="btn3" onMouseDown={isLoadingTrue}><Link to={'/scrabble/toplist'} onClick={isLoadingFalse} className="App-link" id='link'>
            {loading && (<i className="fa fa-spinner fa-spin"></i>)}
            {loading && <span> Innlesur</span>}
            {!loading && !gameOver && <span>Eg gevi upp</span>}
            {!loading && gameOver}
          </Link></button>
          
          <Switch>
            <UserProvider value={[score, randomLetters, trueWordsInserted, level]}>
              <Route exact path='/scrabble/toplist' component={TopList} />
            </UserProvider>
          </Switch>

        </div>
      </Router>
    );
}

function getTiles(shuffledword) {
    var items = [];

    for(let i = shuffledword.length - 1; i >= 0; i--) {
      for(let j = Alphabet.length - 1; j >= 0; j--) {
        if (shuffledword[i] === Alphabet[j].id)
        {
          items.push(<img key={i} src={Alphabet[j].image} alt=""/>); 
        }
      }
    }

    return items.reverse();
}

export default Scrabble;