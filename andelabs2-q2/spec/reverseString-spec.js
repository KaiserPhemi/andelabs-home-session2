'use strict';

var reverseString = require("../app/reverseString").reverseString;

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(reverseString('misc')).toEqual('csim');
    });

  });

  describe("Case for other inputs other than string type", function(){
    
    it("Should return `Input must be a string` for numeric input 5", function(){
      expect(reverseString(5)).toEqual("Input must be a string");
    });

    it("Should return `Input must be a string` for array input ['femi', 'akinwa']", function(){
      expect(reverseString(['femi', 'akinwa'])).toEqual("Input must be a string");
    });
  });

});