// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function () {
	it("fixed tests", function () {
		assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
		assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
	});
});

// ======== My solution ====================================

const flip = (d, a) => {
	a.sort((first, second) => {
		return first - second;
	});
	if (d === 'L') {
		a.reverse();
		return a;
	} else {
		return a;
	}
}