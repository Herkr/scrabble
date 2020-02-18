import trueWordComb from './Word-combinations';

function missingWords(trueWordsInserted, rand, wordsFromDictionary) {
    const missing = [];
    const trueCombinations = trueWordComb(rand, wordsFromDictionary);
  
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

export default missingWords;