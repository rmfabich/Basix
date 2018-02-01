//let's make our first test. We're going to test this manually. Calling it "manual" might not make sense, but it will later. 
//Just know there is a better way to write tests.

//Here's a function that returns the subtraction of two integers. 

var subtract = function(num1, num2){
  return num2 + num1;
  }
  
//One way to test this would be to come up with use cases, think of what it should do, analyze the code, and judge whether it
//works. This is dangerous because humans are fools (there's a whole slew of reasons why this is bad, but that's one of them).

//Writing tests explicity requires us to think about the code, use cases, and contexts in a very deliberate way. 

//A simple, manual test would look like this:
if (subtract(5, 3) === 2){
  console.log('test case 1 passed');
} else {
  console.log('test case 1 failed');
}

//oh shite! It fails. Good thing we wrote this test before we submitted this function to the world. Change it to make it work

Here's some other tests to pass:
if (subtract(3, "5") === "your args need to be integers"){
  console.log("test case 2 passed");
  } else {
  console.log("test case 2 failed");
 }

//Change the function to make test 2 pass. And the rest of the tests below.


if (subtract("six", 3) === "your args need to be integers")){
  console.log("test case 3 passed");
  } else {
  console.log("test case 3 failed");
 }

if (subtract() === "you need supply two integers"){
  console.log("test case 4 passed");
  } else {
  console.log("test case 4 failed");
 }
 
 //You guys are test-driven developers now. You modified your code to make tests pass, instead of make tests pass your code. 
 //Are there other tests to write? 0 is a weird number, maybe we should test that. Perhaps we should also test if a fellow 
 //developer only supplied one argument? Write tests for those.
  
  
  

