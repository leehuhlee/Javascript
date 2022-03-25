function getFirstAmountSorted(inputArray, numberOfItems) {
    inputArray.sort();
    let outputArray = [];
    if(numberOfItems > 0)
        outputArray = inputArray.slice(0, numberOfItems)
    return outputArray;
  }
  
const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);