console.log("Hello, World!");


let a = 6;

console.log(a);

let b = "Hello, World!"
console.log(b);

console.log(a + 6);


// If statement
if (a == 5) {
  console.log("a is 5")
}
else {
  console.log("a is not 5");
}


// For Loops 
// for (let i = 0; i < 10; i++) {
//  console.log(i);
// }


// While Loops 
let j = 0;
let stop = 10;

while (j < stop) {
  if (j % 3 === 0) {
    j++;
    continue;
  }
  
  console.log(j);
  j++;

  if (j == 8) {
    break;
  }
}


console.log("After the while loop")