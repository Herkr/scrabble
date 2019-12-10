import React, { useContext } from 'react';
import ScoreList from '../components/score-list';
import AddScoreEntryForm from '../components/add-score-entry-form';
import UserContext from './UserContext';
import trueWordComb from '../components/Word-combinations';
import { UserProvider } from './UserContext';

function TopList() {

  //context state frá Scrabble.js
  const score = useContext(UserContext)[0];
  const level = useContext(UserContext)[3];
  const totalScore = () => {
    if (numberOfMissingWords === 0)
    {
      return score + level*25;
    }
    return score;
  }
  
  const randomLetters = useContext(UserContext)[1];
  const trueWordsInserted = useContext(UserContext)[2];

  const missingW = missingWords(trueWordsInserted, randomLetters)
  const numberOfMissingWords = missingW.length;
  
  return (
    <div className="App">
      <header className="App-header-list">
        <h3 className='App-score'>Tú hevur fingið {totalScore()} stig!</h3>
        <h5>{alertAllFound(numberOfMissingWords, level)}</h5>
        <h5>Vel eitt annað torleikastig, fyri at byrja eitt nýtt spæl</h5>
        <h5>Skriva títt navn niðanfyri og goym títt úrslit</h5>

        <UserProvider value={totalScore()}>
          <AddScoreEntryForm />
        </UserProvider>
        
        <ScoreList />
        
        <button className="App-button" onClick={()=>{ alert('ONNUR ORÐ: ' + missingW.join(', ')); }}>Onnur orð</button>
        <br />
      </header>
    </div>
  );
}

// if all words are found
// allert that tells you that you get extra points
function alertAllFound(numberMissingwords, level) {
  if (numberMissingwords === 0)
  {
    return (
      <div class="App-greenAlert">
        Tú hevur funnið øll orðini! Tú fært {level*25} eyka stig
      </div>
    );
  }
  return "Tú manglaði " + numberMissingwords + " orð";
}

function missingWords(trueWordsInserted, rand) {
  const missing = [];
  const trueCombinations = trueWordComb(rand);

  for (let i = trueCombinations.length -1; i >= 0; i--) {
    // inserted words that are true 
    //are not in all of the combinations that can be made
    if(!trueWordsInserted.includes(trueCombinations[i]))
    {
      // doesn't push the same words multiple times
      if(!missing.includes(trueCombinations[i]))
      {
        missing.push(trueCombinations[i]);
      }
    }
  }
  return missing;
}

export default TopList;