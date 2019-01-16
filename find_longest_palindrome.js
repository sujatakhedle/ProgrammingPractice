Find the longest single-word palindrome within a phrase. The phrase will only contain letters (no symbols, punctuation, or numbers). Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.



function findLongestPalindrome(sentence) {
  var getWords = sentence.split(' ');
  var palindromeArr = [];

  for (var i = 0; i < getWords.length; i++) {
    if (isPalindrome(getWords[i])) {
      palindromeArr.push(getWords[i]);
    }
  }
 palindromeArr.sort(sortAscendingByLength);
 return palindromeArr[palindromeArr.length - 1];
}


function reverseString(string) {
  if (!string) {
    return '';
  }
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word.toLowerCase() === reverseString(word.toLowerCase());
}

function sortAscendingByLength(a, b) {
    return a.length - b.length;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed:', testName);
  } else {
    console.log('FAILED [' + testName +'] Expected' + expected + ' but got, ' + actual);
  }
}

assertEqual(findLongestPalindrome('Mom got a tacocat Racecar'), 'Racecar', 'should return the longest palindrome of the sentence’);
