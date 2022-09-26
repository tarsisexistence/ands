/**
 * Leetcode #2379
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 */
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
export const minimumRecolors = (blocks, k) => {
  let min = Infinity;
  let left = 0;
  let Bs = 0;
  let Ws = 0;

  for (let i = 0; i < blocks.length; i += 1) {
    if (blocks[i] === 'B') {
      Bs += 1;
    } else {
      Ws += 1;
    }

    if (Bs + Ws === k) {
      min = Math.min(min, Ws);

      if (blocks[left] === 'B') {
        Bs -= 1;
      } else {
        Ws -= 1;
      }

      left += 1;
    }
  }

  return min;
};
