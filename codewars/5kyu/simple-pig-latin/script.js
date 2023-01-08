// ======== My solution ====================================
function pigIt(str) {
  return str
    .split(' ')
    .map((i) => (/^[a-z\d]+$/i.test(i) ? i.slice(1) + i[0] + 'ay' : i))
    .join(' ');
}

// ======== Sample tests ====================================
const Test = require('@codewars/test-compat');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
    Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay');
  });
});
