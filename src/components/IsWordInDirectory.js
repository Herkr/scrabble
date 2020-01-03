import Dictionary from '../json/Dictionary-seven.json';
import AlphabetStarts from '../json/Alphabet-index-start';


function isWordInDirectory(word) {
  // array of all the words from the dictionary
  var wordsFromDictionary = Object.keys(Dictionary);
  
  if(word.length !== 0)
  {
    for (let i=0; i<AlphabetStarts.length; i++)
    {
      if(word.charAt(0) === AlphabetStarts[i].id[0] || word.charAt(0) === AlphabetStarts[i].id[1] || word.charAt(0) === AlphabetStarts[i].id[2])
      {
        for (let j = AlphabetStarts[i].value; j < (AlphabetStarts[(i+1)].value)-1; j++) {
          if(wordsFromDictionary[j] === word)
          {
            return true;
          }
        }
      }
    }
    return false;
  }
  return;
}
export default isWordInDirectory;
