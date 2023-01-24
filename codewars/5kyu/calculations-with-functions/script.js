// ======== My solution ====================================
const zero = (fnc) => fnc ? fnc(0) : 0;
const one = (fnc) => fnc ? fnc(1) : 1;
const two = (fnc) => fnc ? fnc(2) : 2;
const three = (fnc) => fnc ? fnc(3) : 3;
const four = (fnc) => fnc ? fnc(4) : 4;
const five = (fnc) => fnc ? fnc(5) : 5;
const six = (fnc) => fnc ? fnc(6) : 6;
const seven = (fnc) => fnc ? fnc(7) : 7;
const eight = (fnc) => fnc ? fnc(8) : 8;
const nine = (fnc) => fnc ? fnc(9) : 9;

const plus = (a) => (b) => parseInt(b + a);
const minus = (a) => (b) => parseInt(b - a);
const times = (a) => (b) => parseInt(b * a);
const dividedBy = (a) => (b) => parseInt(b / a);


// ======== Sample tests ====================================
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times    (five ())), 35);
    assert.strictEqual(four (plus     (nine ())), 13);
    assert.strictEqual(eight(minus    (three())),  5);
    assert.strictEqual(six  (dividedBy(two  ())),  3);
  });
});
