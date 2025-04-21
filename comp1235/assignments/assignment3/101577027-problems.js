"use strict";



// First Function

function Circle(radius) {
  this.radius = radius;
    
  this.area = function() {
    let result = Math.PI * this.radius * this.radius;
    return Math.round(result * 100) / 100;
  };
    
  this.perimeter = function() {
    let result = 2 * Math.PI * this.radius;                                     // This calculates the area using PI * r²
    return Math.round(result * 100) / 100;                                  // and this rounds the result to 2 decimal places      
  };
}


// SEcond Function                  

const calculateSalary = (hoursArray) => {

    return hoursArray.reduce((total, hours, index) => {     // This determines if it's a weekend (index 5 = Saturday, index 6 = Sunday)

const isWeekend = index >= 5;
      
let regularHourlyRate = 10;
let overtimeHourlyRate = 15;                                                                                       // This calculates the  pay based on regular hours and overtime

      
    if (isWeekend) {                                                             // the double the rates for weekends
    regularHourlyRate *= 2;
    overtimeHourlyRate *= 2;
}
const regularHours = Math.min(hours, 8);                                 // This is the calculate  pay for regular hours (up to 8)
const regularPay = regularHours * regularHourlyRate;                                        // and this is the calculate pay for overtime hours (beyond 8)
const overtimeHours = Math.max(0, hours - 8);
const overtimePay = overtimeHours * overtimeHourlyRate;
      
    return total + regularPay + overtimePay;                     // This  Adds the day's pay to the total
}, 0);
};

// Third Function

const indexMultiplier = (array) => {
  return array.reduce((sum, currentValue, index) => sum + (currentValue * index), 0);         // Here it multiplies each value by its index and adds to the sum
};

// Forth Function

const filteredJSON = (array) => {
  return array.filter(item => {
  
const Condition = item.id > 10;                         //  This checcks if condition is greater than 10
    
const username = item.u.trim();                 // This getss the first character of the username 
const firstChar = username.charAt(0).toUpperCase(); 
    
const userCondition = firstChar >= 'M' && firstChar <= 'Z';        // then it checks if the first character is in the range from m to z

    
  return Condition && userCondition;            // It will only return true only if both conditions are met above

  });
};


// Fifth Function

const breakAway = function(array, n) {
  const result = [];                         // This creates an empty array to store the chunk
  
  for (let i = 0; i < array.length; i += n) {     // It will loop through the array in steps of size n
    result.push(array.slice(i, i + n));         // then this will add each chunk to the result array
  }
  
  return result; // After that it will return to the array of chunks..
};


