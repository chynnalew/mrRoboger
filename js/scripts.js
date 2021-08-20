

function digits(input) {
  if (input === 3) {
    return "Won't you be my neighbor?";
  } else if (input === 2) {
    return "Boop";
  } else if (input === 1) {
    return "Beep";
  }
  return false
}

function inputArray(input) {
  let array = []
  for (var i = 0; i <= input; i++) {
    array.push(i);
  }
  return array;
}