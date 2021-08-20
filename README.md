Digits Function - produce the correct output with single digits:

Test: "It should recognize when the number is 1 and return 'Beep'."
Code:
const input = 1;
digits(input);
Expected output: "Beep"

Test: "It should recognize when the number is 2 and return 'Boop'."
Code: 
const input =2;
digits(input);
Expected output: "Boop"

Test: "It should recognize when the number is 3 and return 'Wont you be my neighbor?."
Code:
const input = 3;
digits(input);
Expected output: "Won't you be my neighbor?"

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Input function - Creating an array from input:

Test: "It should produce a string containing the every whole number between 0 and input"
Code:
const input = 5;
inputArray(input);
Expected output: [0, 1, 2, 3, 4, 5]

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Num Function - recognizing single digits in a number

Test: "It should recognize is the digit 3 is in a number"
Code:
input = "35"
num(input);
Expected output: true

//refactor digit function into num function to recognize 1, 2, and 3 in muliti digit numbers//


Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:
