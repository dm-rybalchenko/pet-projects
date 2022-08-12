describe("Solution", function () {
	it("should test for something", function () {
		Test.assertDeepEquals(quadratic(0, 1), [1, -1, 0]);
		Test.assertDeepEquals(quadratic(1, 1), [1, -2, 1]);
		Test.assertDeepEquals(quadratic(-4, -9), [1, 13, 36]);
		Test.assertDeepEquals(quadratic(-5, -4), [1, 9, 20]);
		Test.assertDeepEquals(quadratic(4, -9), [1, 5, -36]);
		Test.assertDeepEquals(quadratic(5, -4), [1, -1, -20]);
	});
});

// =========== my solution ==============
// I didn't get the problem clearly, so I counted "a" coefficient from the roots

function quadratic(x1, x2) {
	let b = -(x1 + x2);
	let c = x1 * x2;
	let a = -(b * (x1 || x2) + c) / (x1 || x2) ** 2;
	return [a, b, c];
}