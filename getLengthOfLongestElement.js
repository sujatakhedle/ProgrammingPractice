Write a function called "getLengthOfLongestElement".
Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.
Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/


function getLengthOfLongestElement(arr) {
  // your code here
  if (arr.length < 1) {
    return 0;
  }
  var maxLength = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength.length) {
      maxLength = arr[i];
    }
  }
 return maxLength.length;
}
getLengthOfLongestElement(['one', 'two', 'three']);
