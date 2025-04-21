console.log("Hello, World!")

// Arrays 
const my_array = ['Benz', 'Stephen', 'Farinas']

console.log(my_array[0])

console.log(my_array[1])

// Object 
const my_obj = {
  first_name: "Benz",
  last_name: "Farinas",
  other_name: "Stephen"
}

console.log(my_obj.last_name)
console.log(my_obj["first_name"])

let my_key = "other_name"
console.log(my_obj[my_key])

// This takes to all my_obj variable 
// Destructuring
let { first_name, last_name, other_name } = my_obj
console.log(last_name)

// Spread Operator (...)
console.log(my_array[0], my_array[1], my_array[2])


const second_array = ['John', 'Doe', 'That one', 'Who?']
// const total_array = [my_array[0], my_array[1], ...]
const total_array = [...my_array, ...second_array]
console.log(total_array)

/// Objects

// Arrays are Iterable meaning they can do something over again repeteadly

console.log(my_obj)
console.log(my_obj.first_name, my_obj.last_name, my_obj.other_name)


// Second Obj
const second_obj = {
  food: 'Pizza',
  day: 'Wednesday',
  ...my_obj
}

console.log(second_obj) // We can spread it 

