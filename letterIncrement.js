/* This challenge requires you to change every letter in the string to the
letter following it in the alphabet, so a becomes b, z becomes a, etc. Once
every letter is changed, we then need to capitalize only the vowels,
namely: a, e, i, o, u. */

function letterIncrement(str) { 
   var newChar = ''; 
   var char = '';
   var VOWELS = 'aeiou';
  
  newChar = str.replace(/[a-z]/gi, function(c) {
     var char = String.fromCharCode(c.charCodeAt(0) + 1);
     if (VOWELS.indexOf(char) > 0) {
        return char.toUpperCase();
     }
  return char;
  });
 return newChar;
}
letterIncrement("hello*3”);  // output = “Ifmmp*3"
           	 

//OR

function letterIncrement(str) {
   var a = str.replace(/[a-z]/gi,replacer);
   var  b = a.replace(/[aeiou]/gi,replacer2)
  return b; 
}

function replacer (match) {
    return String.fromCharCode(match.charCodeAt(0) + 1);
} 

function replacer2 (match) {
    return match.toUpperCase();
}

 letterIncrement("hello*3”);
