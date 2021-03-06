'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here

//function sum() takes two parameters
//sums the values passed into the parameters
//returns an array containing the sum and a string explanation
function sum(a, b) { //eslint-disable-line
  var sum_total = a + b;
  var plain_english = 'The sum of ' + a + ' and ' + b + ' is ' + sum_total + '.';

  //print the two values and their sum to the console
  console.log('Added: ' + a + ' + ' + b + ' = ' + sum_total);

  return [sum_total, plain_english];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

//Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here

//function multiply() takes two parameters
//multiplies the values passed into the parameters
//returns an array containing the product and a string explanation
function multiply(a, b) { //eslint-disable-line
  var multipilcation_total = a * b;
  var say_it_with_words = 'The product of ' + a + ' and ' + b + ' is ' + multipilcation_total + '.';

  //print the two values and thier product to the console
  console.log('Multipied: ' + a + ' * ' + b + ' = ' + multipilcation_total);

  return [multipilcation_total, say_it_with_words];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here

//function sumAndMyltiply() takes three parameters
//sums all three values using the sum() function
//multiplies all three values using the multiply() function
//returns an array containing 4 elements:
//the sum, the product, a string explanation of the sum, and a string explanation of the product
function sumAndMultiply(a, b, c) { //eslint-disable-line
  var sum_step_one = sum(a, b);
  var sum_total = sum(sum_step_one[0], c);
  var sum_string = a + ' and ' + b + ' and ' + c + ' sum to ' + sum_total[0] + '.';

  //print the string explanation of the sum to the console
  console.log(sum_string);

  var multiply_step_one = multiply(a, b);
  var multiplication_total = multiply(multiply_step_one[0], c);
  var multiplication_string = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiplication_total[0] + '.';

  //print the string explanations of the product to the console
  console.log(multiplication_string);

  return [sum_total[0], multiplication_total[0], sum_string, multiplication_string];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here

var testArray = [2, 3, 4]; //eslint-disable-line

//function sumArray() takes a single parameter (a three element array)
//sums all three elements using the sum() function
//returns an arrray containing the sum and a string explanation
function sumArray(sumArr) { //eslint-disable-line
  var sum_the_first_two_elements = sum(sumArr[0], sumArr[1]);
  var array_sum_total = sum(sum_the_first_two_elements[0], sumArr[2]);
  var arrray_string = sumArr + ' was passed in as an array of numbers, and ' + array_sum_total[0] + ' is their sum.';

  //print the string explanation of the array sum to the console
  console.log(arrray_string);

  return [array_sum_total[0], arrray_string];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here

//function multArr() takes a single parameter (a three element array)
//multiplies all three elements using the multiply() function
//returns an arrray containing the product and a string explanation
function multiplyArray(multArr) { //eslint-disable-line
  var multiply_first_two_elements = multiply(multArr[0], multArr[1]);
  var multiplication_total = multiply(multiply_first_two_elements[0], multArr[2]);
  var arrray_string_multiplication = 'The numbers ' + multArr + ' have a product of ' + multiplication_total[0] + '.';

  //print the string explanation of the array product to the console
  console.log(arrray_string_multiplication);

  return [multiplication_total[0], arrray_string_multiplication];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here

var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line


//function multiplyAnyArray() takes a single parameter (an array of any length)
//multiplies all elements using the multiply() function
//returns an arrray containing the product and a string explanation
function multiplyAnyArray(dynamicArray) { //eslint-disable-line

  //starts total at 1 so that the first round of multiplication works correctly
  var total = 1;

  //iterates through the array, multiplying all elements
  for (var i = 0; i < dynamicArray.length; i++) {
    //holds the current step of the multiplication process
    //returned value of multiply() is an array
    var current_step = multiply(total, dynamicArray[i]);
    //updates the total based on the current step in the multiplication process
    total = current_step[0];
  }
  var dynamic_string = 'The numbers ' + dynamicArray + ' have a product of ' + total + '.';

  //print the string explanation of the array product to the console
  console.log(dynamic_string);

  return [total, dynamic_string];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
