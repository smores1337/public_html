const message = 'Hello, World!'

console.log(message)

function my_func() {
    let a = 5
    console.log(a)
    console.log(message)
}

// Second Function
function my_func2()  {
    console.log(" This is a Second Function")
}

my_func()

my_func2()

export { my_func, my_func2 } // We are exporting the closure 
