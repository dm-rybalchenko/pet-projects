// ======== My solution ====================================

function warnTheSheep(queue) {
	for (let i = 1; i <= queue.length; i++) {
		if (queue[queue.length - i] === "wolf" && i === 1) {
			return "Pls go away and stop eating my sheep"
		} else if (queue[queue.length - i] === "wolf") {
			return `Oi! Sheep number ${i - 1}! You are about to be eaten by a wolf!`
		}
	}
}


// ======== condition of the problem ====================================

const strictEqual = require('chai').assert.strictEqual;

function doTest(queue, expected) {
	const log = `for queue [${queue.join(', ')}]\n`;
	const actual = warnTheSheep(queue);
	strictEqual(actual, expected, log);
}

describe("Fixed tests", function () {
	it("Tests", function () {
		doTest(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
			"Oi! Sheep number 2! You are about to be eaten by a wolf!"
		);
		doTest(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
			"Oi! Sheep number 5! You are about to be eaten by a wolf!"
		);
		doTest(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
			"Oi! Sheep number 6! You are about to be eaten by a wolf!"
		);
		doTest(["sheep", "wolf", "sheep"],
			"Oi! Sheep number 1! You are about to be eaten by a wolf!"
		);
		doTest(["wolf"],
			"Pls go away and stop eating my sheep"
		);
		doTest(["sheep", "sheep", "wolf"],
			"Pls go away and stop eating my sheep"
		);
	});
});