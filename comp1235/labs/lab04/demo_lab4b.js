b = "Heyoooayau, World!";
re_test = /^Hel*[ouya]+, Wo?rld!?$/i

if (re_test.test(b)) {
  console.log("Hello to you too!")
}



// Objects

let student_arr = ["John Doe", 25, "Computer Science"]
 console.log(student_arr); 

let student = { name: "John Doe", age: 25, major: "Computer Science" }
console.log(student);



// Trying Things

console.log(student.name);
console.log(student.age);
console.log(student.major);

// Object into Object

let course = {
  name: "Introduction to Full-Stack Development",
  num_students: 100,
  course_code: "COMP1235",
  assignments: ["assignment1", "assignment2", "assignment3"],
  exams: {
    exam1: "Mid-term Exam",
    exam2: "Final Exam"
  }

}
console.log(course);



// let student_major = student.major
// console.log(student_major);

let { name: student_name, age: student_age, course: student_major } = { name: "John Doe", age: 25, major: "Computer Science" };
console.log(student);

