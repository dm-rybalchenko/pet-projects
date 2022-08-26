// ======== My solutions ====================================

function splitTheBill(x) {
	let arr = Object.entries(x);
	let average = arr.reduce((sum, [key, value]) => sum + value, 0) / arr.length;
	arr = arr.map(([key, value]) => [key, +(value - average).toFixed(2)]);
	return Object.fromEntries(arr);
}

function splitTheBill(x) {
	let arr = Object.values(x);
	let average = arr.reduce((sum, value) => sum + value, 0) / arr.length;
	let newObject = {};
	for (let [key, item] of Object.entries(x)) {
		newObject[key] = +(item - average).toFixed(2);
	}
	return newObject;
}


// ======== Sample tests ====================================
describe("Tests", () => {
	it("test", () => {
		Test.assertSimilar(splitTheBill({ A: 20, B: 15, C: 10 }), { A: 5, B: 0, C: -5 });
		Test.assertSimilar(splitTheBill({ A: 40, B: 25, X: 10 }), { A: 15, B: 0, X: -15 });
	});
});