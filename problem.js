

/////////////////////////////////////////////////////////////
// 1. Even or Odd
// Write a JavaScript program to check if a given number is even or odd using the modulus operator.

// let num = -7;

// if (num === 0) {
//     console.log("The number is not Even or Odd, it is 0" );
// }else{
//     if(num % 2 === 0) {
//         console.log("The number ("+ num +") is Even" );
//     }
//     else{
//         console.log("The number "+ num +" is Odd" );
//     }
// }








////////////////////////////////////////////////////////////
// 2. Largest of Three Numbers
// Create a program that takes three numbers as input and uses if-else statements to find and print the largest number.

// let num1 = -79;
// let num2 = -65;
// let num3 = -28;

// if(num1 > num2 && num1 > num3){
//     console.log("The number ("+num1 +") is largest out of three")
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("The number ("+num2 +") is largest out of three")
// }
// else if(num3 > num1 && num3 > num2){
//     console.log("The number ("+num3 +") is largest out of three")
// }
// else{
//     console.log("Please don't input at least two same number")
// }









//////////////////////////////////////////////////////////////////////
// 3. Check Leap Year
// Write a function to determine whether a given year is a leap year or not. Remember that a leap year is divisible by 4, but if it is a century year (like 1900 or 2000), it must also be divisible by 400.

let year = 800;

if( year % 4 === 0 && year % 100 !== 0 ){
    console.log("it is a leap year")
}else if( year % 4 === 0 && year > 999 && year % 400 === 0 ){ 
    console.log("it is a leap year")
}else{
    console.log("its not leap year")
}