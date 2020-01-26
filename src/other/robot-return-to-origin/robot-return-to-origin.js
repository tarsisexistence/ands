/**
 * Leetcode #657
 * https://leetcode.com/problems/robot-return-to-origin/
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
export const judgeCircle = moves => {
  let x = 0;
  let y = 0;

  for (let move of moves) {
    if (move === 'L' || move === 'R') {
      x += move === 'L' ? 1 : -1;
    } else {
      y += move === 'U' ? 1 : -1;
    }
  }

  return x === 0 && y === 0;
};
