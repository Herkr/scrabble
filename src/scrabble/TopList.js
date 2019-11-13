import React, { useContext } from 'react';
import ScoreList from '../components/score-list';
import AddScoreEntryForm from '../components/add-score-entry-form';
import UserContext from './UserContext';

function TopList() {

  //context state frá App.js
  const score = useContext(UserContext);
  
    return (
        <div>
          <br />
          <h2>Tú hevur fingið {score} stig</h2>
          <h3>Skriva títt navn niðanfyri og goym títt úslit</h3>
          <AddScoreEntryForm />
          <ScoreList />
          
          <br />
        </div>
    );
}

export default TopList;