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
if ( number % 2 === 1 || number === 0){
    number += 1;
}
for (let i = number; i < number1; i *= 2){
    console.log(i);
}
// task4
// Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

let number = prompt("Enter a number")
let thereAre0;
for(let i = 0; i < number.length; i++){
    if (number[i] == 0 && number[i+1] == 0 && number[i+2] == 0) {
        thereAre0 = true;
        break;
    }
}
if(thereAre0){
    console.log('Yes');
}else{
    console.log('No');
}

// task5
//Insert two positive integers n and m between 1 and 10. Compute and print n m .

let n =+prompt("Enter a number");
let m =+prompt("Enter a number");
let result = 1;
if ( n > 0 && m > 0 && n < 10 && m < 10 && n === Math.trunc(n) && m === Math.trunc(m) ){
    for (let i = 1; i <= m; i++){
        result *= n;
     }
    console.log(result);
}else{
    console.log("Wrong number");
}
