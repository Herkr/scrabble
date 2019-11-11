import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TopList from './TopList';
import Dictionary from '../json/Dictionary.json';
import Alphabet from './Alphabet';
import UserContext from './UserContext';

function Scrabble() {


  const restrictKey = event => {
    var newRandomWord = [];
    newRandomWord = randomWord;

    for (let i = newRandomWord.length -1; i >= 0; i--) {
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
  const addWord = () => setWord(document.getElementById('word').value.toLowerCase() + ' ' + word);

  //context state frá App.js
  const level = useContext(UserContext);

  // get the tiles to show on screen
  var randomWordBefore = getShuffledWordFromDictionary(level);
  const [randomWord, setRandomWord] = useState(randomWordBefore);
  var randomLettersBefore = ShuffleWord(randomWord);
  const [randomLetters, setRandomLetters] = useState(randomLettersBefore);
  var tiles = getTiles(randomLetters); 

  // array with the true words from the dictionary
  var trueWords = getArrayOfTrueWords(word);
  const countTrueWords = () => {
    if(trueWords.length !== 0)
    {
      return trueWords.split(',').length;
    }
    return 0;
  }

  return (
      <Router>
        <div>
          <br />
          <h3>Finn so nógv orð sum gjørligt, burturúr bókstavunum niðanfyri</h3>
          <h2>Funnin orð: {trueWords}</h2>
          <h2>Øll orð: {word}</h2>
          <h1>Stig: {getScoreForWord(trueWords)}  orð: {countTrueWords()}</h1>

          <input type='text' name='word' id='word' className= 'App-input-box' maxLength={level} placeholder='Skriva orð her' autocomplete="off" onKeyPress={(event) => restrictKey(event)} />
          <input type="submit" onClick={(event) =>{ addWord();}} value="Leita" className='App-button' />

          <h2>{e => setRandomWord(e.target.value)}</h2>
          <h2>{e => setRandomLetters(e.target.value)}</h2>
          <p>{tiles}</p>
          <h2>{showAlert(word.substr(0,word.indexOf(' ')))}</h2>
          
          <button className="App-button"><Link to={'/scrabble/toplist'} className="App-link">Eg gevi upp</Link></button>
          <button className="App-button" onClick={()=>{ alert(' missing words'); }}>Onnur orð</button>
          
          <Switch>
            <Route exact path='/scrabble/toplist' component={TopList} />
          </Switch>

        </div>
      </Router>
    );
}

function getArrayOfTrueWords(string){
  var allItems = [];
  var items = [];

  // put all items in an array
  for (let i = string.toString().split(' ').length; i >= 0; i--)
  {
    allItems = string.split(' ', string.toString().split(' ').length -1);
  }
  
  for(let i = allItems.length - 1; i >= 0; i--)
  {
    // if word is in directory
      if(isWordInDirectory(allItems[i]) === true)
      {
        // else push
        items.push(allItems[i]);
      }
  }
  return items.toString();
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

function showAlert(word)
{
  if (word.length !== 0)
  {
    if (isWordInDirectory(word) === true)
    {
      return (
        <div class="App-greenAlert">
          {word} funnið! stig: {getScoreForWord(word)}
        </div>
      );
    }
    else
    {
      return (
        <div class="App-redAlert">
          {word} ikki funnið!
        </div>
      );
    }
  }
  return;
}

function isWordInDirectory(word) {
  // array of all the words from the dictionary
  var wordsFromDictionary = Object.keys(Dictionary);

  if(word.length !== 0)
  {
    for (let i = wordsFromDictionary.length - 1; i >= 0; i--) {
      if(wordsFromDictionary[i] === word)
      {
        return true;
      }
    }
    return false;
  }
  return;
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