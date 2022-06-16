function isPalindrome(word) {
  // Write your algorithm here

  string = word.toLowerCase().split("").reverse().join("");
  return string === word;
 
}

/* 
  Add your pseudocode here
  Take the string, lowercase it, split it, reverse it, join it and return the result of the comparison
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;



