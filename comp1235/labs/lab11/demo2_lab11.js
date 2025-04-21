/* let data = fetch('https://catfact.ninja/fact') // The point of fetch is to get data from server
                                                         
let json = data.then(r => r.json()) // This function has single argument which is R
json.then(r => {
    document.querySelector("#my_para").innerHTML = r['fact'] // Two promises

}) // This is the explicit step */



fetch('https://catfact.ninja/fact')
.then(r => r.json())
.then(i => {
    document.querySelector("#my_para").innerHTML = i['fact'] // Two promises
}) 

// This is only the result 

console.log('Hello, World')