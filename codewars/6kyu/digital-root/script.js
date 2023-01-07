// ======== My solution ====================================
function digitalRoot(n) {
  let result = [...String(n)].reduce((acc, i) => acc + parseInt(i), 0);
  return String(result).length > 1 ? digitalRoot(result) : result;
}

// ======== Sample tests ====================================
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', () => {
  it('test', () => {
    assert.strictEqual(digitalRoot(16), 7);
    assert.strictEqual(digitalRoot(456), 6);
  });
});
