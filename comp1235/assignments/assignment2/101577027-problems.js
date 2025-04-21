"use strict";

// 1. This function count how many number are in the input (works for any type)

function _findNumOfDigits(arg) {
    const str = String(arg);                       // Turn input into text
    const digits = str.match(/\d/g);               // This find all number characters
    return digits ? digits.length : 0;             // Return to count of numbers 
}

// 2. This function return a function that remembers the original string

function _surplus(str) {
    return function inner() 
    {                       // This function remember the word str
        return str;
    };
}

// 3. This function filters only string that have numbers in them

function _strNumbers(array) {
    return array.filter(s => /\d/.test(s));         // This checks if string has number
}

// 4. This function Calculate passing/failing grades and class average

function _determineClassGrading(array) {

    let failing = 0;                           
    let passing = 0; 
    let sum = 0;                          // Track of Passing, Failing Grade and the sum for average calculation

  for (const grades of array) {
      if (grades >= 50) 
        {
          passing++;
      } else {
          failing++; 
      }                             // The For loop goes through each grade in the array. It counts how many students are passing "50 or higher" and failing "which is below 50".
      sum += grades;          
  }

  const average = array.length ? sum / array.length : 0;
  const roundedAverage = Number(average.toFixed(1));                // Here we round to first decimal

  console.log(passing, failing, roundedAverage.toFixed(1));        // Show the output in browser "Inspect"

  return [passing, failing, roundedAverage];
}

// 5. It moves all the Big letters to the front, and move all small letters to the back

const _moveCapitalLetters = (str) => {
    
    const upper = [];                                       // Stores uppercase letters in order
    const lower = [];                                       // Same thing but here we store lowercase in order

    for (const char of str) {                               // This for loop checks for if the character are uppercase and alphabetical
        if (char === char.toUpperCase() && char !== char.toLowerCase()) 
            {
            upper.push(char);
        } else 
        {
            lower.push(char);
        }
    }
    return upper.join('') + lower.join('');    // This concatenate the results.
};


