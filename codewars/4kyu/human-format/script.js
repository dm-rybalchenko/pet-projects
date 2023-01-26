// ======== My solution ====================================
function formatDuration(seconds) {
  if (seconds === 0) {
    return 'now';
  }

  let years = Math.floor(seconds / 31536000) + ' year';
  let days = (parseInt(seconds / 86400) % 365) + ' day';
  let hrs = (parseInt(seconds / 3600) % 24) + ' hour';
  let min = (parseInt(seconds / 60) % 60) + ' minute';
  let sec = (seconds % 60) + ' second';

  let arr = [years, days, hrs, min, sec]
    .filter((i) => parseInt(i) > 0)
    .map((i) => (parseInt(i) > 1 ? i + 's' : i));

  return arr.length > 1
    ? arr.slice(0, -1).join(', ') + ' and ' + arr.at(-1)
    : arr[0];
}

// ======== Sample tests ====================================
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});
