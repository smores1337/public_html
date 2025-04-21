let score = 40;

// Short Way 
console.log((score >= 50) ? "You passed" : "You failed");

let msg = (score >= 50) ? "You passed" : "You failed...";
console.log(msg);

// Hard Way
let hair_color = "brown";
let recommendation = (hair_color === "brown") ? "Get highlights!" :
(hair_color === "black" ? "Maybe get highlights" : "Don't get highlights");
console.log(recommendation);

// ------------

// Array Methods
let my_array = ["Benz", "Farinas", "Benz", "Stephen"];

let out = "";
my_array.forEach(e => out += e + "! ");
console.log(out.trim()); 

// Filter Method 
let new_array = my_array.filter(e => e.length === 5);
console.log(new_array);

// Reduce method
let my_nums = [1, 2, 3, 4, 5, 6];
let s = my_nums.reduce((p, e) => p + e, 0)
console.log(s);

let new_out = my_array.reduce((p, e) => p + e + "! ", "");
console.log(new_out.trim());