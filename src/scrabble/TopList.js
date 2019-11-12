import React from 'react';
import ScoreList from '../components/score-list';
import AddScoreEntryForm from '../components/add-score-entry-form';

function TopList() {
  
    return (
        <div>
          <br />
          <h2>Tú fekkst # stig</h2>
          <h3>Skriva títt navn niðanfyri og goym títt úslit</h3>
          <input type='text' name='name' id='name' className= 'App-input-box' maxLength={20} placeholder='Skriva títt navn her' />
          <input type="submit"  value="Goym" className='App-button' />
          
          <ScoreList />
          <AddScoreEntryForm />
          
          <br />
        </div>
    );
}

export default TopList;