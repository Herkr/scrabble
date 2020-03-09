import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Scrabble from './Scrabble';
import { UserProvider } from './UserContext';
import "../css/Scrabble.css";
import ReactGA from '../components/ReactGA';

function App() {
  // google analytics
  ReactGA();

//context state
  const level = { easy: 5, medium: 6, hard: 7};
  const [currentLevel, setCurrentLevel] = useState(level.easy);
  const [clickedTwice, setClickedTwice] = useState(false);
    
  const clickLink5 = () => {
    if(currentLevel === 5)
    {
      setClickedTwice(true);
    }
    else
    {
      setClickedTwice(false);
    }
    document.getElementById('btn5').click();
  }
  const clickLink6 = () => {
    if(currentLevel === 6)
    {
      setClickedTwice(true);
    }
    else
    {
      setClickedTwice(false);
    }
    document.getElementById('btn6').click();
  }
  const clickLink7 = () => {
    if(currentLevel === 7)
    {
      setClickedTwice(true);
    }
    else
    {
      setClickedTwice(false);
    }
    document.getElementById('btn7').click();
  }

  return (
    <Router>
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
                <UserProvider value={[currentLevel, clickedTwice]}>
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
        
      </Router>
    );
}

export default App;