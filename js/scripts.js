//Business Interface
const finalArray = [];

function inputArray(input) {
  const array = []
  for (i = 0; i <= input; i++) {
    array.push(i);
  }
  const stringArray = array.toString().split(",");
  return stringArray;
}

function mrRobo(input) {
  const stringArray = inputArray(input);
  stringArray.forEach(function(number) {
    if (number.includes("3")) {
      finalArray.push("Won't you be my neighbor?");
    } else if (number.includes("2")) {
      finalArray.push("Boop!");
    } else if (number.includes("1")) {
      finalArray.push("Beep!");
    } else {
      finalArray.push(number);
    }
  });
  return finalArray;
}

//User Interface

$(document).ready(function(){
  $("#submit").submit(function(event) {
    event.preventDefault();
    const input = $("#input").val();
    const output = [];
    mrRobo(input).forEach(function(number) {
      output.push(number + " ");
      $("#output").append("<li>" + output.toString().split(",").pop() + "</li>");
    })
    $("#submit").hide();
    $("#user").show();
    $("#robot").show();
    $("#refresh").show();
    $("#userInput").append(input);
  })
})


// //Test functions:

// function digits(input) {
//   if (input === 3) {
//     return "Won't you be my neighbor?";
//   } else if (input === 2) {
//     return "Boop";
//   } else if (input === 1) {
//     return "Beep";
//   }
//   return false
// }

// function inputArray(input) {
//   const array = []
//   for (i = 0; i <= input; i++) {
//     array.push(i);
//   }
//   const stringArray = array.toString().split(",");
//   return stringArray;
// }

// function numbers(input) {
//   const final.array = [];
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