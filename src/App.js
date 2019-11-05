import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Scrabble from './scrabble/Scrabble';
import { UserProvider } from './scrabble/UserContext';
import "./css/Scrabble.css";

function App() {

//context state
  const level = { easy: 5, medium: 6, hard: 7};

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
          
            <button className="App-button"><Link to={'/scrabble/easy'} className="App-link"> Fimm bókstavir </Link></button>
            <button className="App-button"><Link to={'/scrabble/medium'} className="App-link"> Seks bókstavir </Link></button>
            <button className="App-button"><Link to={'/scrabble/hard'} className="App-link"> Sjey bókstavir </Link></button>
          </header>

          <body className="App-body">

              <Switch>
              <UserProvider value={level.easy}>
                <Route exact path='/scrabble/easy' component={Scrabble} />
                <UserProvider value={level.medium}>
                  <Route path='/scrabble/medium' component={Scrabble} />
                  <UserProvider value={level.hard}>
                    <Route path='/scrabble/hard' component={Scrabble} />
                  </UserProvider>
                </UserProvider>
              </UserProvider>
              </Switch>

          </body>    
        </div>
      </Router>
    );
}

export default App;