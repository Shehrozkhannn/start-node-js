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

const scores = [12,24,10,24];
let prevMin = scores[0];
let prevMax = scores[0];
let minCount = 0;
let maxCount = 0;
const breakingRecords = (scores) => {
  console.log('Game' , "Score" , "Min" , "max" , 'count(min)', 'count(max)')    
  for (let index = 0; index < scores.length; index++) {
    const score = scores[index];
    if(score > prevMax){
      maxCount += 1
      prevMax = scores[index]
    }else if (score < prevMin){
      minCount += 1;
      prevMin = scores[index]
    }
    console.log(
      `${index.toString().padEnd(5)}  ${score.toString().padEnd(6)}  ${prevMin.toString().padEnd(5)}  ${prevMax.toString().padEnd(5)}  ${minCount.toString().padEnd(12)}  ${maxCount}`
    );
  }
}
breakingRecords(scores);
