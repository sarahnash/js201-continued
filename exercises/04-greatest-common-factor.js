// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

function gcd (number1, number2) {
  if (number1 > number2) {
    var smallerNumber = number2
    var biggerNumber = number1
  }
  else if (number2 > number1) {
    var smallerNumber = number1
    var biggerNumber = number2
  }
  else if (number1 === number2) {
    var smallerNumber = number1
    var biggerNumber = number2
  }
  var loopNumber = smallerNumber
  console.log(smallerNumber)
  console.log(biggerNumber)
  console.log(loopNumber)
  while (loopNumber <= smallerNumber && loopNumber > 0) {
    if (biggerNumber % loopNumber === 0) {
      return loopNumber
    }
    else if (biggerNumber % smallerNumber !== 0) {
      loopNumber = loopNumber - 1
    }
  }
}