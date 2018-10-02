// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'

function fizzbuzz(number){
    var fizzbuzzString = ('')
    var loopNumber = 1
    while(loopNumber <= number){
        if (loopNumber % 3 !== 0 && loopNumber % 5 !== 0){
            fizzbuzzString += ('.')
        } 
        else if (loopNumber % 3 === 0 && loopNumber % 5 !== 0){
            fizzbuzzString += ('fizz')
        }
        else if (loopNumber % 5 === 0 && loopNumber % 3 !== 0){
            fizzbuzzString += ('buzz')
        }
        else if (loopNumber % 3 === 0 && loopNumber % 5 === 0){
            fizzbuzzString += ('fizzbuzz')
        }
        loopNumber ++
    }
    return fizzbuzzString
}

//console.log(fizzbuzz(3))
//console.log(fizzbuzz(15))