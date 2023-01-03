// ======== My solution ====================================
function solution(number) {
  let sum = new Set();
  for (let i = 3, j = 5; i < number || j < number; i += 3, j += 5) {
    i < number && sum.add(i);
    j < number && sum.add(j);
  }
  return Array.from(sum).reduce((acc, item) => acc + item, 0);
}


// ======== Sample tests ====================================
const { assert } = require('chai');

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = solution(n);
    assert.strictEqual(actual, expected);
  });
}

describe('basic tests', function () {
  test(10, 23);
});
