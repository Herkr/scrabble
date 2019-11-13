import React, { useContext } from 'react';
import ScoreList from '../components/score-list';
import AddScoreEntryForm from '../components/add-score-entry-form';
import UserContext from './UserContext';

function TopList() {

  //context state frá App.js
  const score = useContext(UserContext);
  
    return (
      <div className="App">
      <header className="App-header-list">
          <br />
          <h3>Tú hevur fingið {score} stig</h3>
          <h4>Skriva títt navn niðanfyri og goym títt úslit</h4>

          <AddScoreEntryForm />
          <ScoreList />
          
          <br />
          </header>
        </div>
    );
}

export default TopList;