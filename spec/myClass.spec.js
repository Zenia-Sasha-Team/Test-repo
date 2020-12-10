let MyClass = require("../script.js");
let myObj = new MyClass();
let chai = require ("chai");
const { assert } = require("chai");
let expect = chai.expect;


describe ("Test suit", function () {
    it(  "test the add method", function() {
        expect(myObj.add (1, 2)).to.be.equal(3);
    })
});



describe("Возводит x в степень n", function() {
    it("5 в степени 1 будет 5", function() {
      assert.equal(pow(5, 1), 5);
    });

    it("5 в степени 2 будет 25", function() {
      assert. equal(pow(5, 2), 25);
    });

    it("5 в степени 3 будет 125", function() {
        assert.equal(pow(5, 3), 125);
    });
});