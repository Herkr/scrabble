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

function Scrabble() {
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

  const restrictKey = event => {
    var newRandomWord = [];
    newRandomWord = randomLetters;

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
      if (event.key === newRandomWord[i] || event.key.toUpperCase() === newRandomWord[i].toUpperCase())
      {
        return;
      }
    }
    // no letter is written in textbox
    return event.preventDefault();
  }

  // localstorage
  const wordArray = () => window.localStorage.getItem('word') || '';
  const [word, setWord] = useState(wordArray);
  const addWord = () => {
    var newRandomWord = randomLetters;
    setRandomLetters(newRandomWord);
    var inputWord = document.getElementById('word').value.toLowerCase();
    // clear input field when 'leita' button pressed
    document.getElementById('word').value = "";
    // check if letter in input word is in the random word
    for (let j = inputWord.length -1; j >= 0; j--) {
      if(newRandomWord.includes(inputWord[j]))
      {
        newRandomWord = removeItem(newRandomWord, inputWord[j])
      }
      else
      {
        // if a letter from input word isn't in randomword
        // output alert
        return alert(inputWord + ' er ikki galdandi. Hevur tú brúkt ein bókstav oftari enn hann er vístur? \n Royn eitt annað orð.');
      }
    }
    return setWord(inputWord + ' ' + word);
  }

  //context state frá App.js
  const level = useContext(UserContext);

  // get the tiles to show on screen
  var randomLettersBefore = shuffleWord(getShuffledWordFromDictionary(level));
  const [randomLetters, setRandomLetters] = useState(randomLettersBefore);
  var tiles = getTiles(randomLetters); 

  // array with the true words from the dictionary
  const trueWordsInserted = getArrayOfTrueWords(word);
  const countTrueWords = () => {
    if(trueWordsInserted.length !== 0)
    {
      return trueWordsInserted.length;
    }
    return 0;
  }

  var yellowWords = getAllInputItems(word);

  function showAlert(word){
  if (word.length !== 0)
  {
    if (trueWordsInserted.includes(word))
    {
      if (IsMultipleInArray(yellowWords, word) === false)
      {
        return (
          <div className="App-greenAlert">
            "{word}" funnið! Tú hevur fingið {getScoreForWord(word)} stig :)
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
          "{word}" ikki funnið!
        </div>
      );
    }
  }
  
  return;
}

const score = totalScore(trueWordsInserted);
  
  return (
      <Router>
        <div>
          <h1 className='App-score'>Stig: {score} | Orð: {countTrueWords()}</h1>
          <input type='text' name='word' id='word' className= 'App-input-box' maxLength={level} placeholder='Skriva orð her' autoComplete="off" onKeyPress={(event) => restrictKey(event)} />
          <input type="submit" onClick={addWord} value="Leita" id ='btn' className='App-button' />
          
          <h3>Finn so nógv orð sum gjørligt burturúr bókstavunum niðanfyri</h3>
          
          <p>{tiles}</p>
          <h2>{showAlert(word.substr(0,word.indexOf(' ')))}</h2>
          
          <h2 className="font-color-green">funnin orð: {trueWordsInserted.join(', ')}</h2>
          <h3>Um øll orðini eru funnin, verða {level*25} eyka stig givin</h3>
          
          <button className="App-button" id="btn3" onMouseDown={isLoadingTrue}><Link to={'/scrabble/toplist'} onClick={isLoadingFalse} className="App-link" id='link'>
            {loading && (
            <i className="fa fa-spinner fa-spin"></i>
            )}
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