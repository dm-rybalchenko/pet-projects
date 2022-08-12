// ======== My solution for standart tests ====================================

function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(dadYearsOld - sonYearsOld * 2);
}


// ======== My solution for  my additional test ====================================

// the solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
	return dadYearsOld - sonYearsOld * 2 === 0 ? dadYearsOld : Math.abs(dadYearsOld - sonYearsOld * 2);
}
// the test
describe("Sample tests", function () {
	it("Testing for dad's age: 36 and son's age: 7", function () {
		Test.assertEquals(twiceAsOld(36, 18), 36);
	});
});


// ======== Sample standart tests ====================================

describe("Sample tests", function () {
	it("Testing for dad's age: 36 and son's age: 7", function () {
		Test.assertEquals(twiceAsOld(36, 7), 22);
	});
	it("Testing for dad's age: 55 and son's age: 30", function () {
		Test.assertEquals(twiceAsOld(55, 30), 5);
	});
	it("Testing for dad's age: 42 and son's age: 21", function () {
		Test.assertEquals(twiceAsOld(42, 21), 0);
	});
	it("Testing for dad's age: 22 and son's age: 1", function () {
		Test.assertEquals(twiceAsOld(22, 1), 20);
	});
	it("Testing for dad's age: 29 and son's age: 0", function () {
		Test.assertEquals(twiceAsOld(29, 0), 29);
	});
});