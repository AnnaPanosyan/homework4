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

let number =+prompt("Enter a number");
let number1 =+prompt("Enter a number");
if ( number % 2===1 || number === 0){
    number += 1;
}
for (let i = number; i < number1; i *= 2){
    console.log(i);
}

