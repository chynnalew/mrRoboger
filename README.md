Digits Function (helper function) - produce the correct output with single digits:

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

Input function (helper function) - Creating an array from input:

Test: "It should produce a string containing the every whole number between 0 and input"
Code:
const input = 5;
inputArray(input);
Expected output: [0, 1, 2, 3, 4, 5]

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

Num Function (helper function) - recognizing single digits in an input number

Test: "It should recognize is the digit 3 is in a number and output "Won't you be my neighbor? "."
Code:
const input = "35"
numbers(input);
Expected output: "Won't you be my neighbor? "

Test: "It should recognize the digit 2 is in a number and return "Boop! " ."
Code:
const input = "25";
numbers(input);
expected output: "Boop! "

Test: "It should recognize the digit 1 is in a number and return "Beep! " ."
Code:
const input = "15";
numbers(input);
expected output: "Beep! "

Test: It should recognize when a number doesn't include 1, 2, or 3."
code:
const input = "45";
numbers(input);
expected output: false

//refactor digit function into num function to recognize 1, 2, and 3 in muliti digit numbers, change the returns to required strings//

mrRobo Function (main function)

Test: "It should take an input string and turn it into an integer"
Code:
const input = "45";
inputInt(input);
Expected outcome: 45

Test: "It should take a value, run it through numbers and push the value into the final array"
code: 
const input = "25";
mrRobo(input);
Expected result: ["Boop! "]


