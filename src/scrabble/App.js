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
  const level = { easy: 4, medium: 5, hard: 6};
  const [currentLevel, setCurrentLevel] = useState(level.easy);
    
  const clickLink4 = () => {
    document.getElementById('btn4').click();
  }
  const clickLink5 = () => {
    document.getElementById('btn5').click();
  }
  const clickLink6 = () => {
    document.getElementById('btn6').click();
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
            
            <button className="App-button" onClick={()=>{setCurrentLevel(level.easy); clickLink4()}}>
              <Link to={'/scrabble/easy'} id='btn4' className="App-link"> Fýra bókstavir </Link>
            </button>
            <button className="App-button" onClick={()=>{setCurrentLevel(level.medium); clickLink5()}}>
              <Link to={'/scrabble/medium'} id='btn5' className="App-link"> Fimm bókstavir </Link>
            </button>
            <button className="App-button" onClick={()=>{setCurrentLevel(level.hard); clickLink6()}}>
              <Link to={'/scrabble/hard'} id='btn6' className="App-link"> Seks bókstavir </Link>
            </button>
          </header>
          
          <div className="App-body">
              <Switch>
                <UserProvider value={currentLevel}>
                  <Route exact path='/scrabble/easy' component={Scrabble} />
                  <Route path='/scrabble/medium' component={Scrabble} />
                  <Route path='/scrabble/hard' component={Scrabble} />
                </UserProvider>
              </Switch>

              <p/>
              <p/>
              <span className="black">Orðalisti: <a href="https://frodskaparfelag.fo/grunnar/ordabokagrunnurin/">Orðabókagrunnurin</a>. Summi orð kunnu hava skeivar bendingar</span>
              <span className="black">Skapari av heimasíðu: Herborg Kristoffersen</span>
          </div>
        </div>
        
      </Router>
    );
}

export default App;