import Dictionary from '../json/Dictionary-seven.json';

function isWordInDirectory(word) {
    // array of all the words from the dictionary
    var wordsFromDictionary = Object.keys(Dictionary);
  
    if(word.length !== 0)
    {
      for (let i = wordsFromDictionary.length - 1; i >= 0; i--) {
        if(wordsFromDictionary[i] === word)
        {
          return true;
        }
      }
      return false;
    }
    return;
}
export default isWordInDirectory;
