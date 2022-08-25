// ======== My solution ====================================
const number = (array) => array.map((item, index) => `${++index}: ${item}`);


// ======== Sample tests ====================================
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
	it("test", () => {
		assert.deepEqual(number([]), [], 'Empty array should return empty array');
		assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
	});
});

