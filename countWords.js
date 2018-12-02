/* Write a function called "countWords".
Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(str) {
  // your code here
  var obj = {};
  if (str.length < 1) {
    return {};
  }
  var result = str.split(' ');
  for (var i = 0; i < result.length; i++) {
     if(!obj [result[i]]) {
        obj[result[i]] = 1;
     } else {
       obj[result[i]] ++;
    }
 }
return obj;
}
countWords('ask a bunch get a bunch');
