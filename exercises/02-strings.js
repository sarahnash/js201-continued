// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse(string){
    if (string === null) return false
    var getLetters = string.split("")
    var reverseLetters = getLetters.reverse()
    var finalString = reverseLetters.join("")
    return finalString
    }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord(stringOfWords){
    var arrayOfWords = stringOfWords.split(' ')
    var arrayOfLengths = []
    for (var i=0;i < arrayOfWords.length;i++){
        arrayOfLengths.push(arrayOfWords[i].length);
        }
    var biggestNum = Math.max.apply(null, arrayOfLengths)
    var longestWordIndex = arrayOfLengths.indexOf(biggestNum) 
    var longestWord = arrayOfWords[longestWordIndex]
    return longestWord
   
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer (stringOfWords){
    const forbiddenWords = ("heck,darn,dang,crappy").split(",")
    const arrayOfWords = stringOfWords.split(' ')
    //check if any forbidden words in string
    var goodWords = arrayOfWords.map(val => forbiddenWords.includes(val) ? '' : val);
    var filteredgoodWords = goodWords.filter(word => word.length >= 1)
    var finalNicer = filteredgoodWords.join(' ')  
    return finalNicer
    }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll(sentenceString){
    var sentenceStringPieces = sentenceString.split(" ")
    for (i=0; i < sentenceStringPieces.length; i++){
       sentenceStringPieces[i] = sentenceStringPieces[i].charAt(0).toUpperCase() + sentenceStringPieces[i].substring(1)
       //substring(1) = substring starting at index 1
    }
return sentenceStringPieces.join(' ')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split(myString, myDelimiter){
    var index = myString.indexOf(myDelimiter)
    let splitStrings = []
    
    while (index !== -1){
        const string = myString.substring(0, index)
        splitStrings.push(string)

        myString = myString.substring(string.length)
        //substring(string.length) = (1st index afterstring, to the end) aka rest of string
        myString = myString.substring(myDelimiter.length)
        //now string = (1st index after delimiter, to the end)
        //so cut out string, then delimiter

        index = myString.indexOf(myDelimiter)
        //sets index of next delimiter
    }
    
    splitStrings.push(myString)

    return splitStrings

    }

//console.log(split('xyz', 'r'))
//console.log(split('APPLExxBANANAxxCHERRY', 'xx'))