const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
	it("Testing for fixed tests", () => {
		assert.strictEqual(quarterOf(3), 1)
		assert.strictEqual(quarterOf(8), 3)
		assert.strictEqual(quarterOf(11), 4)
	});
});


// ======== My solution ====================================

const quarterOf = (month) => {
	if (month <= 3) return 1;
	if (month <= 6) return 2;
	if (month <= 9) return 3;
	if (month <= 12) return 4;
}