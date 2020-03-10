import React, { useState } from 'react';
import { BrowserRouter as HashRouter, Switch, Route, Link } from 'react-router-dom';
import Scrabble from './Scrabble';
import { UserProvider } from './UserContext';
import "../css/Scrabble.css";
import ReactGA from '../components/ReactGA';
import Dictionary from '../json/Dictionary-seven.json';
import shuffleWord from '../components/ShuffleWord';
import getShuffledWordFromDictionary from '../components/GetShuffledWordFromDictionary';

function App() {
  // google analytics
  ReactGA();

  var wordsFromDictionary = Object.keys(Dictionary);
//context state
  const level = { easy: 5, medium: 6, hard: 7};
  const [currentLevel, setCurrentLevel] = useState(level.easy);

  const randomLettersBefore = shuffleWord(getShuffledWordFromDictionary(currentLevel, wordsFromDictionary));
  const [randomLetters, setRandomLetters] = useState(randomLettersBefore);

  const clickLink5 = () => {
    window.location.reload();
    //var word5 = shuffleWord(getShuffledWordFromDictionary(5, wordsFromDictionary))
    //setRandomLetters(word5);
    document.getElementById('btn5').click();
  }
  const clickLink6 = () => {
    var word6 = shuffleWord(getShuffledWordFromDictionary(6, wordsFromDictionary));
    setRandomLetters(word6);
    document.getElementById('btn6').click();
  }
  const clickLink7 = () => {
    var word7 = shuffleWord(getShuffledWordFromDictionary(7, wordsFromDictionary));
    setRandomLetters(word7);
    document.getElementById('btn7').click();
  }

  return (
    <HashRouter basename='/'>
        <div className="App">
          <header className="App-header">

            Orðaspæl  
            <p className="App-header2"> 
            við føroyskum orðum
            </p>
            <hr/>
            <p className="App-header2">
            Vel torleikastig
            </p>
            
            <button className="App-button" onClick={()=>{setCurrentLevel(level.easy); clickLink5()}}>
              <Link to={'/scrabble/easy'} id='btn5' className="App-link"> Fimm bókstavir </Link>
            </button>
            <button className="App-button" onClick={()=>{setCurrentLevel(level.medium); clickLink6()}}>
              <Link to={'/scrabble/medium'} id='btn6' className="App-link"> Seks bókstavir </Link>
            </button>
            <button className="App-button" onClick={()=>{setCurrentLevel(level.hard); clickLink7()}}>
              <Link to={'/scrabble/hard'} id='btn7' className="App-link"> Sjey bókstavir </Link>
            </button>
          </header>
          
          <div className="App-body">
              <Switch>
                <UserProvider value={[currentLevel, wordsFromDictionary, randomLetters]}>
                  <Route exact path='/scrabble/easy' component={Scrabble} />
                  <Route path='/scrabble/medium' component={Scrabble} />
                  <Route path='/scrabble/hard' component={Scrabble} />
                </UserProvider>
              </Switch>

              <p/>
              <p/>
              <span className="dark">Orðalisti: <a href="https://frodskaparfelag.fo/grunnar/ordabokagrunnurin/">Orðabókagrunnurin</a>. Summi orð kunnu hava skeivar bendingar</span>
              <span className="dark">Forritað heimasíðu: Herborg Kristoffersen</span>
          </div>
        </div>
        
      </HashRouter>
    );
}

export default App;