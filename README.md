# Mr. Roboger's Neighborhood

#### An Epicodus independent project that converts a user input number into an array of numbers with strings substituted for numbers that fullfil certain requirements. 

#### By: Chynna Lew

## Technologies Used

* HTML
* CSS / Bootstrap
* JavaScript / JQuery

## Description

This project was created using Test Driven Development. The plain text tests can be found in the test section of this document and the test functions are commented out at the end of the scripts.js in the js directory.
This application will output a list of whole numbers from 0 to the user input number. It replaces some numbers in the list with strings, following these rules, in order of importance:
Rule 1: For numbers that contain a 3, the entire number is replaced with "Won't you be my neighbor?"
Rule 2: For numbers that contain a 2, the entire number is replaced with "Boop!"
Rule 3: For numbers that contain a 3, the entire number is replaced with "Won't you be my neighbor?"

## Setup/Installation Requirements

* Go to [project repository](https://github.com/chynnalew/mrRoboger)
* Download the files or Clone the repository to your local machine.
* Open the mrRoboger folder on your local machine.
* Open index.html in your local browser.
* Enter a number into the form and click the submit button!
* Note: You can either refresh your browser or hit the "Try again!" button to enter a new submission.

## Known Bugs

*  No bugs known at this time

 ## License

 [MIT](https://opensource.org/licenses/MIT) 2021

 ## Contact Information

 chynnalew@yahoo.com


## Tests
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

Test: "It should convert a number array into a string array."
Code:
const input = 5;
inputArray(input);
Expected Result: ["0","1","2","3","4","5"];

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

////////////////////////////////

mrRobo (main function)

Test: "It should take a value, run it through numbers and push the value into the final array"
code: 
const input = "25";
mrRobo(input);
Expected result: ["Boop! "]

Test: "It should take each element of an array and push the return values for each index into the final array"
Code:
const input = "5";
mrRobo(input);
Expected Result: [ "0", "Beep!", "Boop!","Won't you be my neighbor?", "4", "5 "]
