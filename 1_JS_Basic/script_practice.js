// alert("I want to learn JavaScript!");

// console.log("Test JavaScript!");

// Variables
// let age = 25;
// age = 26;
// console.log(age);

// Constants
const pi = 3.14159;
console.log(pi);

// Adding Numbers and Strings
let clothes = 25;
let shoes = 30;
let discount = 0.8;
let total = (clothes + shoes) * discount;

console.log(total);

// total = total + 100;
// total += 100;

// // total = total - 10;
// total -= 10;

// Use `` and ${} to add variables in a sentence
let sentence = `The total is ${total}. The clothes spent ${clothes}. The shoes spent ${shoes}.`;

console.log(sentence);

// .length to get the length of a string
let length = sentence.length;

console.log(length);

// .replace to replace a string
let newSentence = sentence.replace("total", "final");
console.log(newSentence);

// .slice to get a part of a string
let newSentence2 = sentence.slice(0, 10);
console.log(newSentence2);

// .toFixed to set the decimal places
let people = 3;
let avg = total / people;
let avgFixed = avg.toFixed(2); // 2 decimal places
console.log(avgFixed);

// Math.round to round a number
let avgRound = Math.round(avg);
console.log(avgRound);

// let country = "Taiwan";
// let city = "Taipei";
// let road = "Zhongshan rd. No. 111";
// let address = country + ", " + city + ", " + road;

// console.log("TJay live at " + address);

// Boolean
// let score1 = 65;
// let score2 = 70;
// let score3 = "65";
// let score4 = 80;
// let score5 = 40;
// let score6 = 90;

// // == only compare the value
// console.log(score1 == score2); // false
// console.log(score1 == score3); // true

// // === compare the value and the data type
// console.log(score1 === score3); // 

// // if/else statement
// if (score1 >= 80) {
//     console.log("Very Good!");
// } else if (score1 >= 60) {
//     console.log("Please study harder.");
// } else {
//     console.log("Fail");
// }

// // && and
// if (score1 >= 60 && score2 >= 60) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// // || or
// if (score1 >= 60 || score2 >= 60) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// // ! not
// if (!(score5 >= 60)) {
//     console.log("Fail");
// } else {
//     console.log("Pass");
// }

// Array
let scores = [65, 70, 65, 80, 40, 90];
console.log(scores);
console.log(scores[0]);  // 65
// .push to add an element to the end of an array
scores.push(100);
console.log(scores);
// .pop to remove the last element of an array
scores.pop();
console.log(scores);
// .shift to remove the first element of an array
scores.shift();
console.log(scores);
// .unshift to add an element to the beginning of an array
scores.unshift(50);
console.log(scores);
// .splice to remove elements from an array
scores.splice(1, 2);
console.log(scores); // [50, 80, 40, 90]
// .concat to combine arrays
let scores2 = [60, 70, 80];
let scores3 = scores.concat(scores2);

// .indexof to get the index of an element
let index = scores3.indexOf(80);
console.log(scores3); // [50, 65, 80, 40, 90, 60, 70, 80]
console.log(index); // 3

// .length to get the length of an array
let length2 = scores3.length;   // 7
console.log(length2);

// loop
for (let i = 0; i < scores.length; i++) {
    console.log(`The score of ${i + 1} is ${scores[i]}`); 
}

// function
function sayHello(TJay) {
    console.log(`Hello, ${TJay}!`);
}
sayHello("TJay");

