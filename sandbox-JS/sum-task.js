// sum of array of nums
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  function sumArray(array) {
    // check len of array
    if (! Array.isArray(array) || array.length <= 2) {
        return 0;
    }
    // in case everything is ok
      array.sort(compareNumeric);
      let sum = array.slice(1, -1).reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
      });
      return sum;
  }

let arr = null;
let sum = sumArray(arr)
console.log(sum)
