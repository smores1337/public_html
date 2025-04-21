// Object Methods
const student = {
  name: "Benz",
  id: "101577027",
  grades: [70, 80, 90, 100], // It can be simple value or array

  program_coordinator: { // We know that in OOP that object can have properties
    name: "Jaylyn",
    id: "1000000",    // This is a nested object an object within another object
    email: "Jaylyn@gmail.com",

    business_card: function () {  // This refers to program_coordinator 
      return this.name + " / " + this.email // We have to use "this" because email is a property of program coordinator 
    }                                       // It has the same as the pattern when doing the highest grade
  }, 

  highest_grade: function () { // This refers to student
    let hg = 0;
    for (let i = 0; i < this.grades.length; i++){
    if (this.grades[i] > hg) {
      hg = this.grades[i]
      }                                   // JUST BE AWARE THAT WHAT EVER METHOD YOU ARE IN THE WORD " THIS "WILL
    }                                         // ALWAYS REFER TO THE OBJECT THAT YOU ARE ACTUALLY LOOKING AT. 
    return hg                        
  }
}

console.log(student.name)
console.log(student.id)
console.log(student.grades)
console.log(student.highest_grade())
console.log(student.program_coordinator.business_card())



// Constructor Function
function Student() {
  this.name = "Benz Farinas";
  this.id = "101577027";
  this.grades = [10, 20, 30, 40];

  this.program_coordinator = {
    name: "Jaylyn",
    id: "1000000",
    email: "Jaylyn@gmail.com",
    business_card: function () {
      return this.name + " / " + this.email;
    }
  };

  this.highest_grade = function () {
    let hg = 0;
    for (let i = 0; i < this.grades.length; i++) {
      if (this.grades[i] > hg) {
        hg = this.grades[i];
      }
    }
    return hg;
  };
}

const s1 = new Student();

console.log(s1.name); 
console.log(s1.id); 
console.log(s1.grades); 
console.log(s1.highest_grade()); 
console.log(s1.program_coordinator.business_card());

