import getAllInputItems from './GetAllInputItems';
import IsWordInDirectory from './IsWordInDirectory';

function getArrayOfFalseWords(string){
    var allItems = getAllInputItems(string);
    var items = [];
    
    for(let i = allItems.length - 1; i >= 0; i--)
    {
      // if word is not in directory
        if(IsWordInDirectory(allItems[i]) === false)
        {
            items.push(allItems[i]);
        }
    }
    return items;
  }

export default getArrayOfFalseWords;