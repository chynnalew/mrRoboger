const input = parseInt(userInput);

function inputArray(input) {
  const array = []
  for (i = 0; i <= input; i++) {
    array.push(i);
  }
  return array;
}

function mrRobo(array) {
  for (i=0; i<array.length; i++) {

  }
}
function numbers(input) {
  if (input.includes("3")) {
    return "Won't you be my neighbor?";
  } else if (input.includes("2")) {
    return "Boop!";
  } else if (input.includes("1")) {
    return "Beep!";
  }
  return input;
}

