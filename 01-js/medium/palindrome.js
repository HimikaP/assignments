/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {


// remove non-alphanumerics and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  n=str.length;

  for(let i=0,j=n-1;i< n/2; i++, j--){
    if(str[i] != str[j]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
