/**
 * Leetcode #3320
 * Difficulty: Easy
 * https://leetcode.com/problems/snake-in-matrix
 */

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
export const finalPositionOfSnake = (n, commands) => {
  let x = 0;
  let y = 0;

  for (const command of commands) {
    if (command === 'UP') y--;
    if (command === 'RIGHT') x++;
    if (command === 'DOWN') y++;
    if (command === 'LEFT') x--;
  }

  return y * n + x;
};
