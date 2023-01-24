// ======== My solution ====================================
function rgb(r, g, b) {
  return [r, g, b]
    .map((i) => (i < 0 ? 0 : i > 255 ? 255 : i))
    .map((i) => i.toString(16).toUpperCase())
    .map((i) => (i.length === 1 ? '0' + i : i))
    .join('');
}

// ======== Sample tests ====================================
const Test = require('@codewars/test-compat');

describe('Tests', () => {
  it('Basic Tests', () => {
    Test.assertEquals(rgb(0, 0, 0), '000000');
    Test.assertEquals(rgb(0, 0, -20), '000000');
    Test.assertEquals(rgb(300, 255, 255), 'FFFFFF');
    Test.assertEquals(rgb(173, 255, 47), 'ADFF2F');
  });
});
