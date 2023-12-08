/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.toLowerCase();

    let count = 0;

    let str1 = str.split('');
    str1.forEach((element) => { if(element == 'a' || element =='e' || element =='i' || element =='o' || element == 'u'){
      count++;
    }
      
    })
    
    return count;
}


//Alternate solution - will not handle repetitions well
// function countVowels(str){
//   str = str.toLowerCase();
//   let n=0;

//   const matches = str.match(/[aeiou]/gi);
//   n=matches.length;

//   return n;
// }


module.exports = countVowels;