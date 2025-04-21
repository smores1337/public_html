// Without Functions
console.log("Hello :)")

let subtotal = 7 
const sales_tax = 2

let total = subtotal * sales_tax 
 console.log(total)

subtotal = 8
total = subtotal * sales_tax
console.log(total)


// With functions
function total_func(subtotal) {
  return subtotal * sales_tax
}
console.log(total_func(7))
console.log(total_func(8))
console.log(total_func(9))

console.log(total_func("Hello"))

// Function for Current Date
function current_date() {
  const my_date = new Date();
  console.log("Today's date is:", my_date.toDateString())
}
current_date()

// Function for Temp
function c_to_f(temp) {
 const f = (temp * 1.8) + 32 
 return f
}
 
let f  = c_to_f (-11)
console.log(f)