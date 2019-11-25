import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TopList from './TopList';
import Dictionary from '../json/Dictionary-seven.json';
import Alphabet from '../components/Alphabet';
import UserContext from './UserContext';
import { UserProvider } from './UserContext';
import IsWordInDirectory from '../components/IsWordInDirectory';
import IsMultipleInArray from '../components/IsMultipleInArray';

function Scrabble() {

  // sortera orðini av nýggjum json array
  // hjálpitabell a,á,b,d index

  const restrictKey = event => {
    var newRandomWord = [];
    newRandomWord = randomLetters;

    for (let i = newRandomWord.length -1; i >= 0; i--) {
      // add word when enter is clicked
      if(event.key === 'Enter') 
      {
        document.getElementById('btn').click();
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

  const disableInputButton =  () => {
    document.getElementById("btn").disabled = true;
  }

  // localstorage
  const wordArray = () => window.localStorage.getItem('word') || '';
  const [word, setWord] = useState(wordArray);
  const addWord = () => {
    var newRandomWord = randomLetters;
    var inputWord = document.getElementById('word').value.toLowerCase();
    
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
        return alert(inputWord + ' er ikki galdandi. Royn eitt annað orð.');
      }
    }
    return setWord(inputWord + ' ' + word);
  }

  //context state frá App.js
  const level = useContext(UserContext);

  // get the tiles to show on screen
  var randomLettersBefore = ShuffleWord(getShuffledWordFromDictionary(level));
  const [randomLetters, setRandomLetters] = useState(randomLettersBefore);
  var tiles = getTiles(randomLetters); 

  // array with the true words from the dictionary
  const trueWordsInserted = getArrayOfTrueWords(word)
  const countTrueWords = () => {
    if(trueWordsInserted.length !== 0)
    {
      return trueWordsInserted.length;
    }
    return 0;
  }

  var yellowWords = getAllInputItems(word);

  function showAlert(word)
{
  if (word.length !== 0)
  {
    if (IsWordInDirectory(word) === true)
    {
      if (IsMultipleInArray(yellowWords, word) === false)
      {
        return (
          <div class="App-greenAlert">
            "{word}" funnið! Tú hevur fingið {getScoreForWord(word)} stig :)
          </div>
        );
      }
      else
      {
        return (
          <div class="App-yellowAlert">
            "{word}" er longu funnið
          </div>
        );
      }
    }
    else
    {
      return (
        <div class="App-redAlert">
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
          <input type='text' name='word' id='word' className= 'App-input-box' maxLength={level} placeholder='Skriva orð her' autocomplete="off" onKeyPress={(event) => restrictKey(event)} />
          <input type="submit" onClick={addWord} value="Leita" id ='btn' className='App-button' />
          
          <h3>Finn so nógv orð sum gjørligt burturúr bókstavunum niðanfyri</h3>
          
          <h2>{e => setRandomLetters(e.target.value)}</h2>
          <p>{tiles}</p>
          <h2>{showAlert(word.substr(0,word.indexOf(' ')))}</h2>

          <h3>Um øll orðini eru funnin, verða {level*25} eyka stig givin</h3>
          <h2>funnin orð: {trueWordsInserted.join(', ')}</h2>

          <button className="App-button" onClick={disableInputButton}><Link to={'/scrabble/toplist'} className="App-link">Eg gevi upp</Link></button>
          
          <Switch>
            <UserProvider value={[score, randomLetters, trueWordsInserted, level]}>
              <Route exact path='/scrabble/toplist' component={TopList} />
            </UserProvider>
          </Switch>

        </div>
      </Router>
    );
}

function totalScore(foundWords) {
  var score = 0;

  for (let i = foundWords.length -1; i >= 0; i--) {
    score = score + getScoreForWord(foundWords[i]);
  }
  return score;
}

function removeItem(randomWord,item) {
  for (let i = randomWord.length -1; i >= 0; i--) {
    if(item.includes(randomWord[i]))
    {
      return randomWord.slice(0,i) + randomWord.slice(i+1,randomWord.length);
    }
  }
}

function getAllInputItems(string) {
  var allItems = [];

  // put all items in an array
  for (let i = string.toString().split(' ').length; i >= 0; i--)
  {
    allItems = string.split(' ', string.toString().split(' ').length -1);
  }
  return allItems;
}

function getArrayOfTrueWords(string){
  var allItems = getAllInputItems(string);
  var items = [];
  
  for(let i = allItems.length - 1; i >= 0; i--)
  {
    // if word is in directory
      if(IsWordInDirectory(allItems[i]) === true)
      {
        if(!items.includes(allItems[i]))
        {
          items.push(allItems[i]);
        }
      }
  }
  return items;
}

function  getScoreForWord(word) {
  var score = 0;
    for(let i = word.length - 1; i >= 0; i--) {
      for(let j = Alphabet.length - 1; j >= 0; j--) {
        if (word[i] === Alphabet[j].id)
        {
          score = score + Number(Alphabet[j].value);
        }
      } 
  }
    return score;
}

function getTiles(shuffledword) {
    var items = [];

    for(let i = shuffledword.length - 1; i >= 0; i--) {
      for(let j = Alphabet.length - 1; j >= 0; j--) {
        if (shuffledword[i] === Alphabet[j].id)
        {
          items.push(<img src={Alphabet[j].image} alt=""/>);
        }
      }
    }

    return items.reverse();
}

// Richard Durstenfeld shuffle algorithm
function shuffleArray(array) {
  for(let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// shuffle the letters in a word
function ShuffleWord(word) {
  // create array
  var newWord = word.split('');
  shuffleArray(newWord);

  /*
  if(newWord === word)
  {
    ShuffleWord(word);
  }*/
  return newWord;
}

// get shuffled word from Dictionary.json with the length 5
function getShuffledWordFromDictionary(lengthOfWord) {
  // array of all the words from the dictionary
  var wordsFromDictionary = Object.keys(Dictionary);
  // array of all the words with 5 letter
  var arrayOfNLengthStrings = wordsFromDictionary.filter(word => word.length === lengthOfWord);
  var shuffledArray = shuffleArray(arrayOfNLengthStrings);
  // empty array for words with lower case
  var items = [];
  // unicode: Á=\u00C1 Ð=\u00D0 Í=\u00CD Ó=\u00D3 Ú=\u00DA Ý=\u00DD Æ=\u00C6 Ø=\u00D8'   
  var checkChar = /^[A-Z\u00C1\u00D0\u00CD\u00D3\u00DA\u00DD\u00C6\u00D8]/;

  for (let i = shuffledArray.length - 1; i >= 0; i--) {
    // check if upper case
    if(checkChar.test(shuffledArray[i]) === false){
      items.push(shuffledArray[i]);
    }
  }
  return items[0];
}

export default Scrabble;