import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TopList from './TopList';
import Dictionary from '../json/Dictionary.json';
import Alphabet from './Alphabet';
import UserContext from './UserContext';

function Scrabble() {

  //context state frá App.js
  const level = useContext(UserContext);

    var randomWord = getShuffledWordFromDictionary(level);
    var randomLetters = ShuffleWord(randomWord);
    var tiles = getTiles(randomLetters); 

  return (
      <Router>
        <div>
          <input type='text' name='word' id='word' className= 'App-input-box' />
          <input type='button' value='Leita' className='App-button' /> 
          

          <h2>{randomWord}</h2>
          <p>{tiles}</p>
          

          <button className="App-button"><Link to={'/toplist'} className="App-link">Eg gevi upp</Link></button>
          <button className="App-button" onClick={()=>{ alert('found and missing words'); }}>alert</button>
          
          <Switch>
            <Route exact path='/toplist' component={TopList} />
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
          items.push(<img src={Alphabet[j].image} alt=""/>);
        }
      }
    }

    return items.reverse();
}

// Richard Durstenfeld shuffle algorithm
function shuffleArray(array) {
  for(let i = array.length - 1; i > 0; i--) {
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

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // check if upper case
    if(checkChar.test(shuffledArray[i]) === false){
      items.push(shuffledArray[i]);
    }
  }

  return items[0];
}

export default Scrabble;