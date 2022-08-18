
    // split string to words by space char
    // take every first letter from word in given string
    // uppercase it
    // join them toghether

var str = "sdf fghjk hjk erty";
var arr = str.split(' ');
var arr1 = arr.map(x => x.slice(0, 1).toUpperCase());
console.log(arr1.join(''));

function toAcronym(str){
    let arr = str.split(' ');
    return arr.map(x => x.slice(0, 1).toUpperCase()).join('');
}

console.log(toAcronym(str));