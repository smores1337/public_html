function part1(){
    // Start your code here for first part. There is no need to return any value.

    let student_id = "101577027"; 
    let full_name = "Benz Farinas";
    let lab_prof = "Leonard Zajaczkowski"
    let lab_session_day = "Wednesday";
    let semester = "Fall 2024";    // I did not print the semester variable since it is not shown in output instruction.

    // To display my information on the web page

    document.write("<section style='position: absolute; bottom: 30px; right: 15px;'>");
    document.write("<label style='font-weight: 600;'>Student ID:</label> " + student_id + " <label style='font-weight: 600;'>Full Name:</label> " + full_name + "<br>"); 
    document.write("<label style='font-weight: 600;'>Lab Professor:</label> " + lab_prof + " <label style='font-weight: 600;'>Lab Session Day:</label> " + lab_session_day + "<br>");
    document.write("</section>");

    // Converting my information into a new form by changing each character

    let encodedstudent_id = encodedString(student_id);
    let encodedfull_name = encodedString(full_name);
    let encodedlab_prof = encodedString(lab_prof);
    let encodedlab_session_day = encodedString(lab_session_day);


    // To display my encoded information on the web page 

    document.write("<section style='position: absolute; bottom: -20px; right: 15px;'>");
    document.write("<label style='font-weight: 600;'>Encoded Student ID:</label> " + encodedstudent_id + " <label style='font-weight: 600;'>Encoded Full Name:</label> " + encodedfull_name + "<br>");
    document.write("<label style='font-weight: 600;'>Encoded Lab Professor:</label> " + encodedlab_prof + " <label style='font-weight: 600;'>Encoded Lab Session Day:</label> " + encodedlab_session_day + "<br>");
    document.write("</section>");

    // This function takes a string and "encodes" it by shifting each character's code by 1 like the thing in lab

    function encodedString(input_gbc) {
        let result = "";  
        for (let x = 0; x < input_gbc.length; x++) {
            let code_one = input_gbc.charCodeAt(x);  
            let code_two = code_one + 1;  
            result += String.fromCharCode(code_two);  
        }
        return result;  
    }
}
function part2(apple, apple2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here
    
    // I changed the variable numbers to fruit so apple is increased by 5, and apple2 is decreased by 3
    apple += 5;
    apple2 -= 3;  

    // This code compares two fruits after modification

    if (apple < apple2) { // If apple is less than apple2, return -1
        _return = -1;
    } 
    else if (apple === apple2) { // If both apples are equal, return 0
        _return = 0;
    } 
    else {
        _return = 1; // If apple is greater than apple2, return 1
    }

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return; 
}

function part3(orange, orange2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // To hold the sum of numbers for the divisibility condition

    let the_sum = 0; 

    if (orange < orange2) { // Check if orange is less than orange2 and loop through the range of orange
        for (let a = orange; a <= orange2; a++) {
            _return += a;  // Add each orange to the result as text
            the_sum += a;  // Add the orange to the total sum
        }
    }
    else if (orange > orange2) { // Check if orange is greater than orange2 and loop through the range of orange
        for (let a = orange; a >= orange2; a--) {
            _return += a;  // Same thing add each orange to the result as text
            the_sum += a;  // Add the orange to the total sum
        }
    }
    else { // If both oranges are the same 
        _return = (orange + orange2).toString(); // Show the sum of the oranges
        the_sum = orange + orange2;  
    }
    if (the_sum % 3  === 0) {
        _return = "Magic" + _return;  // If the sum of the oranges is divisible by 3, add the word "Magic" before the result

    } 
    /* Your code ends here.
       Don't add or change anything after this line.*/
       return _return;      
}

function part4(grapes, grapes2) {
    // Assign the return value to a variable named _return
    let _return = '';
    // Your code should start here

    if (grapes < 0 || grapes >= grapes2.length) {   // If grapes is out of range, return false
        _return = false;    // This means the grapes index is not valid
    } 
    else {
        let number_of_grapes = grapes2[grapes]; // Get the number of grapes at this index

    if (number_of_grapes === 0) {
        _return = true; // If the number of grapes is zero, return it to true
    } 
    else {
        let total_sum = 0;

        if (number_of_grapes % 2 === 0) {   // If the number of grapes is even, add numbers before it

            if (grapes > 0) {
            for (let b = 0; b < grapes; b++) {
        total_sum += grapes2[b]; // Add the numbers before this index
            }
        }
    } 
    else {  // Here if the number of grapes is odd, add numbers after it
        if (grapes < grapes2.length - 1) {
            for (let b = grapes + 1; b < grapes2.length; b++) {
                total_sum += grapes2[b]; // Add the numbers after this index
                }
         }
     }
        if (total_sum === 0) {  // This check the sum and give a special result based on the conditions
             _return = 0; // If the sum is 0, return 0
        } 
         else {
            _return = total_sum; // If not just return the sum if not divisible by 3
            }
        }
    }
    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
    
}
function part5(gbc) {
    // Assign the return value to a variable named _return

    let _return = '';
    // Your code should start here

    // This code creates  empty arrays for odds and even numbers, and variables to hold their sums.
    let odd_numbers = [];
    let even_numbers = [];
    let sum_of_odd = 0;
    let sum_off_even = 0;

    // Go through each number in the gbc list
    for (let c = 0; c < gbc.length; c++) {
        if (gbc[c] % 2 === 0) { // If the number is even
            even_numbers.push(gbc[c]); // Add it to the even number list
            sum_off_even += gbc[c]; // Add it to the sum of even numbers
        } 
        else { // If the number is odd
            odd_numbers.push(gbc[c]); // Add it to the odd numbers list 
            sum_of_odd += gbc[c]; // Add it to the sum of odd numbers
        }
    }

    // This combines odd numbers and even numbers into one list
    let gbc_array = odd_numbers.concat(even_numbers);
    
    // This add the total sum of odd and even numbers at the end of the list.
    gbc_array.push(sum_of_odd);
    gbc_array.push(sum_off_even);

    // Return the final list with the numbers and sums
    return gbc_array;

    /* Your code ends here.
       Don't add or change anything after this line.*/
    return _return;
}


