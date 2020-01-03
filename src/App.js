import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Scrabble from './scrabble/Scrabble';
import { UserProvider } from './scrabble/UserContext';
import "./css/Scrabble.css";

function App() {

//context state
  const level = { easy: 5, medium: 6, hard: 7};
  const [currentLevel, setCurrentLevel] = useState(level.easy);
    
  const clickLink5 = () => {
    document.getElementById('btn5').click();
  }
  const clickLink6 = () => {
    document.getElementById('btn6').click();
  }
  const clickLink7 = () => {
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
            <p>
            Vel torleikastig
            </p>
            
            <button className="App-button" onClick={()=>{setCurrentLevel(level.easy); clickLink5()}}><Link to={'/scrabble/easy'} id='btn5' className="App-link"> Fimm bókstavir </Link></button>
            <button className="App-button" onClick={()=>{setCurrentLevel(level.medium); clickLink6()}}><Link to={'/scrabble/medium'} id='btn6' className="App-link"> Seks bókstavir </Link></button>
            <button className="App-button" onClick={()=>{setCurrentLevel(level.hard); clickLink7()}}><Link to={'/scrabble/hard'} id='btn7' className="App-link"> Sjey bókstavir </Link></button>
          </header>
          
          <div className="App-body">
              <Switch>
                <UserProvider value={currentLevel}>
                  <Route exact path='/scrabble/easy' component={Scrabble} />
                  <Route path='/scrabble/medium' component={Scrabble} />
                  <Route path='/scrabble/hard' component={Scrabble} />
                </UserProvider>
              </Switch>
          </div>    
        </div>
      </Router>
    );
}

export default App;