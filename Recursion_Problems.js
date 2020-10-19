
// Challenge 1
function countdown(n) {
  if(n < 0) return ;
  console.log(n);
  
	return countdown(n- 1)
}


// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
function sum(array, counter = 0, sumArray = 0) {
	//base case: if array is undefined return sumofarray  
  if(!array[counter]){
    return sumArray
  }
  
  let newSumArray = sumArray + array[counter]
  let newCounter = ++counter;
  //add array elem to sumarray 
	
  return sum(array, newCounter,newSumArray)
	//recursive case
}

// uncomment these to check your work
 // console.log(sum([1,1,1])); // -> returns 3
 //  console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
function palindrome(string,counter = 0, reverseString = '') {
  if(string === reverseString){
    return true
  }else if(!string[counter]){
    return false
  }
	//if string equals revesestring, return true
  //else if string at counter is undefined return false
  
  let newReverseString = reverseString + string[string.length - counter - 1] 
  newReverseString = newReverseString.toLowerCase().replace(/[^a-z0-9+]+/gi, '')
  console.log(newReverseString)
  let newstring = string.toLowerCase().replace(/[^a-z0-9]/gi, '')
	let newCounter = ++counter;
  return palindrome(newstring,newCounter, newReverseString)
}

 //  console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
 //  console.log(palindrome("llama mall")); //-> true
 // console.log(palindrome("jmoney")); //-> false


// Challenge 4

function isPrime(num, counter = 2) {
  // if num is two return true
  if(num === 1){
    return false
  }else if(num === 2){
    return true
  }else if (num === counter){
    return true
  }else if (num % counter === 0){
    return false
  }
  
	let newCounter = ++counter;
  
  
	return isPrime(num, newCounter)
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(100)); //-> false


//Challenge 5
function pathFinder(obj, arr, counter = 0) {
  if (!arr[counter]){
    return obj
  }
  
  let newObj = obj[arr[counter]]
  
  let newCounter = ++counter;
  
  return pathFinder(newObj,arr, newCounter )
}

const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };

const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"


//Challenge 6
function flattenRecursively(arr, resultArray = []) { // 
	//base case: if our array's length is 1, return
  if (arr.length === 0){
    return resultArray; 
  }
  	//if element === [insideStuff], then call flattenRecursively(insideStuff)
  if (Array.isArray(arr[0])){   
    return flattenRecursively(arr[0], resultArray ) 
  }
	  //else push to result array
  else{  
    resultArray.push(arr[0])
    return flattenRecursively(arr.slice(1), resultArray)
  }
  ////recursive case: push first element to result, slice out the first element

}
//Challenge 7
function findInOrderedSet(arr, target) {
	//base case: if the first element of the array equals target return true 
  if(arr[0] === target){
    return true 
  }
  if(arr.length === 0  ||  target < arr[0] ){
    return false
  }
  
  //base case: if the array is empty return false 
  //recursive case:  call findInOrderedSet  with arg1 =array.slice(1) and same target
  return findInOrderedSet(arr.slice(1),target)
}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false

//Challenge 8
function countWaysToReachNthStair(n) {
	//base case: when n is 0, return 1
  if (n === 1){
    return 1;
  }
  
  if (n === 0){
    return 1;
  }
  //recursive case: one case for 1 stepper, another case for a 2 stepper
  //recursively call CWTRNS(n - 1) + CWTRNS(n - 2)
  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2); 
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2), (1, 2, 1))


//Challenge 9
function getPermutations(arr) {
  let permutations = [] // [[1,2], [2,1]		
  
  function helperFunc (ar, permutation = []){  
    	//base case: when the input array is empty return the result array
    if(ar.length === 0){   
      return permutations.push(permutation)
    }   
   
    for(let i = 0 ; i < ar.length; i++){
      permutation.push(ar[i])  
      console.log(i)
      //console.log(permutation)
      ar.splice(i,1)
      return helperFunc(ar, permutation )		//[1, 2], [1]
    }
    
  }
  //recursive case: loop through the input array for each element -we want to get permutation with a sliced version of the array , we are going to push element to subResult
  //
  helperFunc(arr)
  return permutations
}

 console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
