

// Event Handlers

function say_hello() {
  console.log("Hello, Mabuhay!")
}

say_hello()

const b = document.querySelector("#btn1")
b.addEventListener( "click", say_hello)


function say_goodbye() {
  console.log("Goodbye!")
}

const p = document.querySelector("#p1")
b.addEventListener( "mouseover", say_goodbye)