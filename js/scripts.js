
//Test functions:



function inputArray(input) {
  const array = []
  for (i = 0; i <= input; i++) {
    array.push(i);
  }
  const stringArray = array.toString().split(",");
  return stringArray;
}


  const string = input.toString();
  const stringArray = string.split("");


function numbers(input) {
  if (input.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (input.includes("2")) {
    return "Boop!";
  } else if (input.includes("1")) {
    return "Beep!";
  } else {
    return input;
  }
}

// const input = parseInt(userInput);

// function mrRobo(input) {
//   const finalArray = [];
//   const array = [];
//   const inputInt = parseInt(input);

//   for (i = 0; i <= inputInt; i++) {
//     array.push(i);
//   };

//   array.forEach(function(number) {
//     if (number.includes("3")) {
//       finalArray.push("Won't you be my neighbor? ");
//     } else if (number.includes("2")) {
//       finalArray.push("Boop! ");
//     } else if (number.includes("1")) {
//       finalArray.push("Beep! ");
//     } else {
//       finalArray.push(number + " ");
//     }
//     return finalArray;
//   });
// }
  

// array.forEach(function(number) {
//   const finalArray = [];
//   if (number.includes("3")) {
//     finalArray.push("Won't you be my neighbor? ");
//   } else if (number.includes("2")) {
//     finalArray.push("Boop! ");
//   } else if (number.includes("1")) {
//     finalArray.push("Beep! ");
//   } else {
//     finalArray.push(number + " ");
//   }
//   return finalArray;
// });
