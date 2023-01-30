// ======== My solution ====================================
function validSolution(board) {
  const check = (arr) => arr.reduce((acc, i) => acc + i, 0) !== 45;

  // Cheking columns and rows
  let i = 0;
  while (i < 9) {
    let result = [];

    for (let j = 0; j < 9; j++) result.push(board[j][i]);

    if (check(result) || check(board[i])) return false;
    i++;
  }

  // Cheking 3*3 blocks
  while (board.length) {
    let result = [];

    for (let i = 0; i < 3; i++) result.push(...board[i].splice(0, 3));

    if (check(result)) return false;

    board = board.filter((i) => i.length);
  }

  return true;
}

// ======== Sample tests ====================================
const Test = require('@codewars/test-compat');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(
      validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ]),
      true
    );

    Test.assertEquals(
      validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 0, 3, 4, 8],
        [1, 0, 0, 3, 4, 2, 5, 6, 0],
        [8, 5, 9, 7, 6, 1, 0, 2, 0],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 0, 1, 5, 3, 7, 2, 1, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 0, 0, 4, 8, 1, 1, 7, 9],
      ]),
      false
    );
  });
});
