Recognize 

Test: "It should recognize when the number contains 1."
Code:
function mrRobo(input) {
  inputArray = input.split("").val();
  inputArray.forEach(function(number) {
    if (number === 1) {
      return true
    } else {
      return false
    }
})};
mrRobo(1) && mrRobo(516) && mrRobo(341);
Expected output: true


