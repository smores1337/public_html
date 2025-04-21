// Function Expression

function myFunc(param1, param2) {
  return param1 + param2
}

console.log(myFunc(3,5))


// let myFuncEx = function(param1, param2) {
//  return param1 + param2
// }


 const yourFuncEx = function(param1, param2) {
return param1 + param2
 }

console.log(yourFuncEx(2,6))
// Modern Way to Write Function

// ---------------------------------------------------------- // 



// Arrow Functions

const myArrowFunc = (param1, param2) => {
  return param1 + param2
}

console.log(myArrowFunc(5,7))

// Returning a simple value

const shortFunc = (a,b) => a + b;
console.log(shortFunc(5,7)); 


// Default Parameters

const myLoggingFunc = (param1 = 0, param2 = 0) => console.log(param1 + param2)
console.log("Two Parameters:")
myLoggingFunc(10, 12)
console.log("One Parameters:")
myLoggingFunc(10) 
console.log("No Parameters: ")
myLoggingFunc()


// Rest Parameters

const myRestFunc = (greet, ...a1) => {
  console.log(greet)
  let a1_sum = 0;
  for (const a of a1) {
    a1_sum = a1_sum + a
  }
  console.log(a1_sum)
}
myRestFunc("Hello Benz!", 1, 2, 3, 4, 5)


// Non Rest
const myNonRestFunc = (greet, a1) => {
  console.log(greet)
  let a1_sum = 0;
  for (const a of a1) {
    a1_sum = a1_sum + a
  }
  console.log(a1_sum)
}
myNonRestFunc("Hello!", [1, 2, 3, 4, 5])

//  Callback functions

console.log()
console.log("A Callback Function")

const func1 = () => console.log("Hello!")
const func3 = () => console.log("Byeeeeeeeeeeeeeeeeeee")
const func2 = (a, b, c, d, e) => {
  console.log(a + b + c + d)
    e()
}
func2(1, 2, 3, 4, func1)
func2(1, 2, 3, 4, func3)


