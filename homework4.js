// task1
// Given a number print its digits count.

let number = prompt("Enter a number")
let count = 0;
for (let i = 0; i < number.length; i++){
    count++;
}
    console.log (count);
//  task2
//  Count numbers of digit 9 in a number.

let number = prompt("Enter a number")
let count = 0;
for (let i = 0; i < number.length; i++){
    if (number[i] == 9){
       count++; 
    }
}
       console.log (count);
// task3
// Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)

