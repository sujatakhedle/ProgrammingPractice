Find the smallest length and check how many elements are present with the same length.

function findsmallestLengthWords(arr) {
  var obj = {};
  if (!arr.length) {
     return [];
 }
 var smallestLength = arr[0].length;

 for (var i = 0; i < arr.length; i++) {
    var currentEleLen = arr[i].length;
    if (currentEleLen < smallestLength) {
      smallestLength = currentEleLen;
    }
    if (!obj[currentEleLen]) {
      var val = [];
      val.push(arr[i]);
      obj[currentEleLen] = val;
    } else {
      obj[currentEleLen].push(arr[i]);
    }
 }
return obj[smallestLength];
}
findSameLengthElem(['one', 'two', 'four', 'send', 'five', 'doll']); 
