// all the words that are entered in the input
// yellow words

function getAllInputItems(string) {
    var allItems = [];
  
    // put all items in an array
    for (let i = string.toString().split(' ').length; i >= 0; i--)
    {
      allItems = string.split(' ', string.toString().split(' ').length -1);
    }
    return allItems;
  }

  export default getAllInputItems;