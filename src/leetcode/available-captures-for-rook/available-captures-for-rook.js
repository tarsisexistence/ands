/**
 * Leetcode #999
 * Difficulty: Easy
 * https://leetcode.com/problems/available-captures-for-rook/
 */
/**
 * @param {string[][]} board
 * @return {number}
 */
export const numRookCaptures = board => {
  let count = 0;
  let x;
  let y;

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === 'R') {
        x = i;
        y = j;
        break;
      }
    }
  }

  for (let i = x - 1; i >= 0; i -= 1) {
    const current = board[i][y];
    const isPawn = current === 'p';

    if (current === 'B' || isPawn) {
      if (isPawn) {
        count += 1;
      }

      break;
    }
  }

  for (let i = x + 1; i < board.length; i += 1) {
    const current = board[i][y];
    const isPawn = current === 'p';

    if (current === 'B' || isPawn) {
      if (isPawn) {
        count += 1;
      }

      break;
    }
  }

  for (let i = y - 1; i >= 0; i -= 1) {
    const current = board[x][i];
    const isPawn = current === 'p';

    if (current === 'B' || isPawn) {
      if (isPawn) {
        count += 1;
      }

      break;
    }
  }

  for (let i = y + 1; i < board.length; i += 1) {
    const current = board[x][i];
    const isPawn = current === 'p';

    if (current === 'B' || isPawn) {
      if (isPawn) {
        count += 1;
      }

      break;
    }
  }

  return count;
};
