// Scopes 
// Global scope
let b = 1 

function my_func () {
  // Function scope
  let a = 0
  console.log(a)
  console.log(b)
}

// Accessing Variables in function scope
my_func()


// Accessing variables in function scope
console.log(b)

let e
if (b == 1) {
  // C is define in block scope Note: This variable C is only visible while we are inside "if statement"
  let c = "Hello"
  console.log("B is 1")
  console.log(c)

  // Not in block scope, Using var is not recommended unless you have reason to do it!
  var d = "Goodbye"
  console.log(d)

  // Changed in block scope, but still exists in global scope

  e = "How are you?"

  console.log(e)

}

// console.log(d)  Using "var"  does not respect the block scope meaning it will  print what ever you put there even it is inside block scope.

// console.log(c) Always remember that If you will use it outside the block scope you will get a reference error!

console.log(e) // I can still refer to variable because it is a global scope meaning you can access it whenever you want.



// Closures 
function my_func_with_closure () {
  let func_var = 0
  console.log(func_var)
  console.log(b)
  

  function inner_func() {
    console.log(func_var)
    let i = 5
    console.log(i)
  }
  inner_func()

  return inner_func
}

// Accessiong variables in function scope
let f_var = my_func_with_closure()

console.log(f_var)
console.dir(f_var)
f_var()


// Event Handlers

