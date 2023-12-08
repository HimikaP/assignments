/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // console.log(str1)
  // console.log(str2)

  if(str1.length != str2.length){
    return false;
  }

  let x = str1.replace(/[a-zA-Z]/g,'');
  let y = str2.replace(/[a-zA-Z]/g,'');

    x = x.split('').sort().join('').toLowerCase();

    y= y.split('').sort().join('');

    // console.log(x);
    // console.log(y);
   

if(x==y){
  return true
}
return false
}

 module.exports = isAnagram;

// isAnagram("hello","world")

