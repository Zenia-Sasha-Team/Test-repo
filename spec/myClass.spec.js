let MyClass = require("../script.js");
let myObj = new MyClass();
let chai = require ("chai");
let expect = chai.expect;


describe ("Test suit", function () {
    it("test the add method", function() {
        expect(myObj.add (1, 2)).to.be.equal(3);
    })
});