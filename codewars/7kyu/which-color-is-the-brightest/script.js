// ======== My solution ====================================
function brightest(colors) {
	let arrMax = colors.map(function (item) {
		let letters = ["A", "B", "C", "D", "E", "F"];
		let arr = item.split('').map((item) => item.replace(/[A-F]/g, (match) => letters.indexOf(match) + 10));
		for (let i = 1; i < arr.length; i += 2) {
			arr[i] = +arr[i] * 16 + +arr[i + 1]
		}
		return Math.max(arr[1], arr[3], arr[5])
	});
	return colors[arrMax.indexOf(Math.max(...arrMax))];
}


// ======== Sample tests ====================================
const chai = require("chai");
const assert = chai.assert;

function dotest(arr, expected) {
	const actual = brightest(arr.slice())
	assert.deepEqual(actual, expected, `Test failed with colors = ${arr}`)
}

describe("Fixed tests", function () {
	it("Basic tests", function () {
		dotest(["#001000", "#000000"], "#001000");
		dotest(["#ABCDEF", "#123456"], "#ABCDEF");
		dotest(["#00FF00", "#FFFF00"], "#00FF00");
		dotest(["#FFFFFF", "#1234FF"], "#FFFFFF");
		dotest(["#FFFFFF", "#123456", "#000000"], "#FFFFFF");
	});
});