import { expect } from "chai";
import { describe } from "mocha";
import { factorial } from "./code.js";

/** Run npm i mocha chai to install mocha and chai */
/** Run npx mocha your.test.file to run */
describe("Factorial tests", function(){
    it("should return 125 if n = 5", function() {
        expect(factorial(5)).to.eq(120);
    });

    it("should return 1 when n is 0", function(){
        expect(factorial(0)).to.eq(1);
    })
})