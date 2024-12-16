//CONVERT 12 hour AM/PM format in to military (24 hours) time format.

// function timeConversion (time) {
//   period = time.slice(-2);
//   let [hours, minutes , seconds] = time.slice(0,-2).split(":").map(Number);

//   if(period === "AM" && hours === 12){
//     hours = 0;
//   } else if (period === "PM" && hours !== 12){
//     hours += 12;
//   }

//   return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
// }

// console.log(timeConversion('12:01:00AM'));


// const timeConversion = (time) => {
//   const timeCode = time.slice(-2);
//   let [hours , mins , secs] = time.slice(0,-2).split(':').map(Number);
//   if(timeCode === 'AM' && hours === 12) hours = 0
//   else if (timeCode === 'PM' && hours !== 12) hours += 12
//   return `${hours.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`
// }

// console.log(timeConversion('06:01:00PM'));


/// BREAKING RECORDS PROBLEM /////////////

// const scores = [12,24,10,24];
// let prevMin = scores[0];
// let prevMax = scores[0];
// let minCount = 0;
// let maxCount = 0;
// const breakingRecords = (scores) => {
//   console.log('Game' , "Score" , "Min" , "max" , 'count(min)', 'count(max)')    
//   for (let index = 0; index < scores.length; index++) {
//     const score = scores[index];
//     if(score > prevMax){
//       maxCount += 1
//       prevMax = scores[index]
//     }else if (score < prevMin){
//       minCount += 1;
//       prevMin = scores[index]
//     }
//     console.log(
//       `${index.toString().padEnd(5)}  ${score.toString().padEnd(6)}  ${prevMin.toString().padEnd(5)}  ${prevMax.toString().padEnd(5)}  ${minCount.toString().padEnd(12)}  ${maxCount}`
//     );
//   }
// }
// breakingRecords(scores);

// CAMEL CASE PROBLEM BY SPLITTING AND COMBINING

// function processData(input){
//   let result;
//   const [operation , type , word] = input.split(';').slice(0,3);
//   if(operation === 'C'){
//     if(type === 'V'){
//       result = word.split(' ')
//       .map((word, index) => 
//         index === 0 
//           ? word.toLowerCase()
//           : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//       )
//       .join('')
//     } else if(type === 'C'){
//        result = word.split(' ').map((word)=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
//     } else if(type === 'M'){
//       result = word.split(' ')
//       .map((word, index) => 
//         index === 0 
//           ? word.toLowerCase()
//           : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//       ).join('').concat('()')
//     }
//     console.log(result)
//   } else if(operation === 'S'){
//     result = word.split('').map((char,index)=> {
//       if(char === char.toUpperCase()){
//         if(index !== 0){
//           char = ' ' + char
//         }
//         return char.toLowerCase();
//       }
//       return char
//     }).join('')
//     if(result[result.length -1] === ')'){
//       result = result.slice(0,-3)
//     }
//   }
// }

// processData('C;M;mouse pad')

// DIVISIBLE SUM PAIRS PROBLEM 


// function divisibleSumPairs(n,k,ar){
//   // const result = [];
//   let count = 0;
//   for (let i = 0; i < ar.length; i++) {
//     for (let j = i+1; j < ar.length; j++) {
//       if((ar[i] + ar[j]) % k === 0){
//         // result.push([ar[i], ar[j]]);
//         count++
//       }
//     }
//   }
//   return count;
// }

// const arry = [1,2,3,4,5,6];
// console.log(divisibleSumPairs(arry.length, 5, arry));

//GLOBAL EXECUTION CONTEXT
// FUNCTION SCOPE CONTEXT (LOCAL SCOPE)


//ANOTHER WAY with 0(n) complexity

// function divisibleSumPairs(n, k, ar) {
//   const remainderCounts = Array(k).fill(0);
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//       const remainder = ar[i] % k;
//       const complement = (k - remainder) % k;
//       count += remainderCounts[complement];
//       remainderCounts[remainder]++;
//   }
//   return count;
// }
// const arry = [1, 2, 3, 4, 5, 6];
// console.log(divisibleSumPairs(arry.length, 5, arry))

// query matching problem 

// function matchStrings (strings , queries){
//     const result = [];
//     for (let i = 0; i < queries.length; i++) {
//     const matchedStr = strings.filter((val)=> queries[i] === val).length
//     result.push(matchedStr)
//     }
//     console.log(result)
    
// }
// matchStrings(['ab','ab','abc'], ['ab','abc','bc']);

//WITH FOREACH
// function matchStrings (strings , queries){
//     const result = [];
//     queries.forEach(query => {     
//         const matchedStr = strings.filter((val)=> query === val).length
//         result.push(matchedStr)
//     });
//     console.log(result)
// }
// matchStrings(['ab','ab','abc'], ['ab','abc','bc']);


//WITH MAP
// function matchStrings (strings , queries){
//     const res = queries.map(query => strings.filter((val)=> query === val).length);
//     return res
// }
// matchStrings(['ab','ab','abc'], ['ab','abc','bc']);

//WITH REDUCE
function matchStrings(strings, queries) {
    // Create a frequency map for strings
    const frequencyMap = strings.reduce((map, str) => {
        map[str] = (map[str] || 0) + 1;
        return map;
    }, {});
    
    // Map each query to its count using the frequency map
    return queries.map(query => frequencyMap[query] || 0);
}

const output = matchStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']);
console.log(output); // Output: [2, 1, 0]

