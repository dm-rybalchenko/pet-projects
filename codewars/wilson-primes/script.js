const chai = require("chai");
const assert = chai.assert;

describe("Tests", function () {
	it("Fixed tests", function () {
		assert.strictEqual(amIWilson(5), true)
		assert.strictEqual(amIWilson(9), false)
		assert.strictEqual(amIWilson(6), false)
	});
});


// ======== My solution ====================================

// Simple solution, only 3 Wilson primes are known: 5, 13, 563
function amIWilson(p) {
	return p === 5 || p === 13 || p === 563 ? true : false;
}


// Difficult solution, calculation of the factorial
function amIWilson(p) {
	p = BigInt(p);
	function factorial(n) {
		return n !== 1n ? n * factorial(n - 1n) : 1n;
	}
	return (factorial(p - 1n) + 1n) % (p * p) === 0n;
}