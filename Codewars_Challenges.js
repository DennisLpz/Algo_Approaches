// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  //we can get rid of all non alpha nuemerical chars and remove duplicate from string
  let newString = string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");
  let stringArray = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //iterate first through loop to remove duplicates
  newString.forEach((elem) => {
    if (!stringArray.includes(elem)) {
      stringArray.push(elem);
    }
  });
  //iterate again through new string version without duplicate or non alpha neumer nums
  // console.log(stringArray)
  stringArray.forEach((elem) => {
    alphabet = alphabet.replace(elem, "");
    //console.log(elem)
    //find the element in the alphabet string , replace with an empty string in alphabetstring
  });
  //if alphabet string is greater than 1 , return false
  //console.log(alphabet)
  if (alphabet.length > 0) return false;
  else return true;
  //return true, means that all alphabets were used
}

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// alphabetPosition("The sunset sets at twelve o' clock.")

//Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  //split the alphabet into an array
  text = text.toLowerCase().replace(/[^a-z]/g, "");
  for (let i = 0; i < text.length; i++) {
    //iterate through the text

    if (alphabetArray.includes(text[i])) {
      //is the character included in the alphabet array
      text = text.replace(text[i], alphabetArray.indexOf(text[i]) + 1 + " ");
      //if so - find the index of the char in the alphabet then replace the char with num
    }
  }

  let newText = text.slice(0, text.length - 1);

  return newText;
}

/// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
function anagrams(word, words) {
  //output should be a new array
  const isAnAnagram = [];
  //iterate through array
  for (let i = 0; i < words.length; i++) {
    //set our word as a variable
    let checkWord = word;
    let counter = 0;
    //counter
    for (let j = 0; j < words[i].length; j++) {
      //nested loop
      if (checkWord.includes(words[i][j])) {
        //if we find the character in our word, replace it with an empty string
        checkWord = checkWord.replace(words[i][j], "");
        counter += 1;
        //add one to our counter
      }
    }
    if (counter === words[i].length && checkWord.length === 0) {
      //if our counter equals the length of our element and variable of word has zero length
      isAnAnagram.push(words[i]);
      //push element to new array
    }
  }
  return isAnAnagram;
}

const hello;
function testingFunc() {
  return `this`;
}
// var lengthOfLongestSubstring = function(s) {
//     const seen = new Set();
//     const subArray = s.split('');
//   return subArray.reduce((acc, curr) =>{
//       if(!seen.has(curr)){
//           seen.add(curr)
//           acc.push(curr);
//       }
//       return acc;
//   }, []).length

// };

// var lengthOfLongestSubstring = function (s) {
//   let longestSubstring = 0;
//   let currCount = 0;
//   let subArray = [];
//   let sArray = s.split("");
//   sArray.forEach((elem) => {
//     if (subArray.includes(elem) && longestSubstring < currCount) {
//       longestSubstring = currCount;
//       console.log(subArray);
//       subArray = [];
//       currCount = 0;
//     } else {
//       currCount += 1;
//       subArray.push(elem);
//     }
//   });
//   return longestSubstring;
// };
// //console.log(lengthOfLongestSubstring(""))
// console.log(lengthOfLongestSubstring("pwwkew"));

// var maxArea = function (height) {
//   //set largestArea variable
//   let largestArea = 0;
//   //loop through array of heights
//   for (let i = 0; i < height.length; i++) {
//     // set a currArea variable
//     let currArea;
//     //create a nested loop to check against the curr area to largestArea
//     for (let j = i + 1; j < height.length; j++) {
//       //if array at i is less than array at j , multiply the value of array at i with j for currArea
//       if (height[i] < height[j]) {
//         currArea = height[i] * j - i;
//       } else {
//         currArea = height[j] * j - i;
//       }
//       //else multiply the value of array at j  with j for currArrea
//     }
//     console.log(currArea);
//     if (currArea > largestArea) {
//       largestArea = currArea;
//     }
//     //outside nested loop, if currArea is greater than largest Area, reassing largest
//   }

//   return largestArea;
//   //return the largestArea
// };
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// var reverse = function (x) {
//   let isNegative = false;
//   x = x.toString();
//   if (x[0] === "-") {
//     isNegative = true;
//     x = x.slice(1, x.length);
//   }
//   x = x.split('').reverse();

//   return isNegative ? parseInt(x.join("")) * -1 : parseInt(x.join(""));
// };
// console.log(reverse(123));
var myAtoi = function (s) {
  //replace the all the spaces using regex
  s = s.replace(/[' ']/g, "");
  let newValue = "";
  //if s has a length of 0 return 0
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/) && newValue === "") {
      return 0;
    } else if (s[i].match(/[a-z]/) && newValue.length > 0) break;
    else {
      newValue += s[i];
    }
  }
  console.log(newValue);
  //total value variable and use //parsint s to make into valid value
  newValue = parseInt(newValue);
  //if total value is within store integer constraint return total value or 0
  return newValue >= Math.pow(2, 31) * -1 && newValue <= Math.pow(2, 31)
    ? newValue
    : 0;
};
//console.log(myAtoi("4193 with words"));

var searchRange = function (nums, target) {
  //if target is not found in nums return array -1 and -1
  //if length is 0 return array -1 and -1
  if (nums.length === 0) return [-1, -1];
  //set a start variable to hold index
  let start;
  let frequency = 0;
  //set a count on frequency add to start index inorder to find end
  //set a for loop to iterate through array, break when end has been found
  for (let i = 0; i < nums.length; i++) {
    console.log();
    if (nums[i] === target) {
      if (start === undefined) {
        start = i;
      }
      frequency += 1;
    }
  }
  console.log(start);
  if (start === undefined) return [-1, -1];
  else {
    return [start, start + frequency - 1];
  }
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
