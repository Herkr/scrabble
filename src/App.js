import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Scrabble from './scrabble/Scrabble';
import { UserProvider } from './scrabble/UserContext';
import "./css/Scrabble.css";

function App() {

//context state
  const level = { easy: 5, medium: 6, hard: 7};
  const [currentLevel, setCurrentLevel] = useState(level.easy);
    return (
    <Router>
        <div className="App">
          <header className="App-header">

            Orðaspæl  
            <p className="App-header2"> 
              við føroyskum orðum 
              <hr/>
              Vel torleikastig
            </p>
          
            <button className="App-button" onClick={()=>setCurrentLevel(level.easy)}><Link to={'/scrabble/easy'} className="App-link"> Fimm bókstavir </Link></button>
            <button className="App-button" onClick={()=>setCurrentLevel(level.medium)}><Link to={'/scrabble/medium'} className="App-link"> Seks bókstavir </Link></button>
            <button className="App-button" onClick={()=>setCurrentLevel(level.hard)}><Link to={'/scrabble/hard'} className="App-link"> Sjey bókstavir </Link></button>
          </header>

          <body className="App-body">

              <Switch>
                <UserProvider value={currentLevel}>
                  <Route exact path='/scrabble/easy' component={Scrabble} />
                  <Route path='/scrabble/medium' component={Scrabble} />
                  <Route path='/scrabble/hard' component={Scrabble} />
                </UserProvider>
              </Switch>

          </body>    
        </div>
      </Router>
    );
}

export default App;