import getAllInputItems from './GetAllInputItems';
import IsWordInDirectory from './IsWordInDirectory';

function getArrayOfTrueWords(string, wordsFromDictionary){
    var allItems = getAllInputItems(string);
    var items = [];
    
    for(let i = allItems.length - 1; i >= 0; i--)
    {
      // if word is in directory
        if(IsWordInDirectory(allItems[i], wordsFromDictionary) === true)
        {
          if(!items.includes(allItems[i]))
          {
            items.push(allItems[i]);
          }
        }
    }
    return items;
  }

export default getArrayOfTrueWords;