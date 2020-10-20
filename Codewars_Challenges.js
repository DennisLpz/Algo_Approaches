// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    //we can get rid of all non alpha nuemerical chars and remove duplicate from string
    let newString = string.toLowerCase().replace(/[^a-z]/g,'').split('');
    let stringArray = [];
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    //iterate first through loop to remove duplicates
    newString.forEach(elem =>{
      if(!stringArray.includes(elem)){
        stringArray.push(elem)
      }
    });
   //iterate again through new string version without duplicate or non alpha neumer nums
   // console.log(stringArray)
    stringArray.forEach(elem =>{
    
     alphabet = alphabet.replace(elem, '');
      //console.log(elem)
        //find the element in the alphabet string , replace with an empty string in alphabetstring
    })
      //if alphabet string is greater than 1 , return false
   //console.log(alphabet)
    if(alphabet.length > 0) return false;
    else return true
    //return true, means that all alphabets were used 
    
  }
  
  
  // In this kata you are required to, given a string, replace every letter with its position in the alphabet.
  
  // If anything in the text isn't a letter, ignore it and don't return it.
  
  // "a" = 1, "b" = 2, etc.
  
  // alphabetPosition("The sunset sets at twelve o' clock.")
  
  //Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
  
  function alphabetPosition(text) {
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    //split the alphabet into an array
    text = text.toLowerCase().replace(/[^a-z]/g,'');
    for(let i = 0 ; i < text.length; i++){
       //iterate through the text 
      
      if(alphabetArray.includes(text[i])){
            //is the character included in the alphabet array
       text = text.replace(text[i],alphabetArray.indexOf(text[i]) + 1 + ' ')  
        //if so - find the index of the char in the alphabet then replace the char with num
      }
    }
    
   let newText = text.slice(0, text.length -1)
    
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
    for(let i = 0 ; i < words.length; i++){
              //set our word as a variable
       let checkWord = word; 
       let counter = 0;
          //counter 
      for(let j = 0 ; j < words[i].length; j++ ){
           //nested loop
        if(checkWord.includes(words[i][j])){
           //if we find the character in our word, replace it with an empty string
           checkWord = checkWord.replace(words[i][j], '');
           counter += 1
              //add one to our counter 
        }    
      }
      if(counter === words[i].length && checkWord.length === 0 ){
    //if our counter equals the length of our element and variable of word has zero length
         isAnAnagram.push(words[i])
            //push element to new array 
      }
            
    }
   return isAnAnagram;
    
  }