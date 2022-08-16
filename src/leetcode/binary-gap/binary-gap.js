/**
 * Leetcode #868
 * Difficulty: Easy
 * https://leetcode.com/problems/binary-gap/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const binaryGap = n => {
  let bin = n.toString(2);
  let max = 0;
  let current = 0;

  for (let i = 0; i < bin.length; i += 1) {
    const isStart = bin[i] === '1' && current === 0;
    const isContinue = bin[i] !== '1' && current !== 0;
    const isEnd = bin[i] === '1' && current !== 0;

    if (isStart || isContinue) {
      current += 1;
    } else if (isEnd) {
      max = Math.max(max, current);
      current = 1;
    }
  }

  return max;
};
