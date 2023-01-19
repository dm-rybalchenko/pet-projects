// ======== My solution ====================================
function validParentheses(parens) {
  let arr = [];
  let result = true;

  parens.split('').forEach((i) => {
    if (i === '(') {
      arr.push(i);
    } else {
      if (!arr.length) {
        result = false;
      }
      arr.shift();
    }
  });

  return result && !arr.length ? true : false;
}

// ======== Sample tests ====================================
const { assert } = require('chai');

describe('Tests', () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses('('), false));
  it(`values: ")"`, () => assert.strictEqual(validParentheses(')'), false));
  it(`values: ""`, () => assert.strictEqual(validParentheses(''), true));
  it(`values: "()"`, () => assert.strictEqual(validParentheses('()'), true));
  it(`values: "())"`, () => assert.strictEqual(validParentheses('())'), false));
});
