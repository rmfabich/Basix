var assert = require('chai').assert;
var countVowels = require('./vowels');

describe("countVowels", function() {
  it("can count upper case vowels", function() {
    //Arrange
    var expected = 5;
    //Act
    var actual = countVowels("AEIOU");
    //Assert
    assert.equal(actual, expected);
  });
  
  it("can count lower case vowels", function() {
    //Arrange
    var expected = 5;
    //Act
    var actual = countVowels("aeiou");
    //Assert
    assert.equal(actual, expected);
  });
  
  it("can count vowels in a string", function() {
    //Arrange
    var expected = 5;
    //Act
    var actual = countVowels("aeioubghty");
    //Assert
    assert.equal(actual, expected);
  });
  it("can count upper case vowels", function() {
    //Arrange
    var expected = 9;
    //Act
    var actual = countVowels("We made it work in two lines.");
    //Assert
    assert.equal(actual, expected);
  });
  
});
