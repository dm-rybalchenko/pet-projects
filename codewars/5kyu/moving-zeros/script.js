// ======== My solution ====================================
function moveZeros(arr) {
  return [...arr.filter((i) => i !== 0), ...arr.filter((i) => i === 0)];
}

// ======== Sample tests ====================================
const { assert, config } = require('chai');
config.truncateThreshold = 0;

describe('Tests', () => {
  it('test', () => {
    assert.deepEqual(
      moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
      [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
    );
  });
});
