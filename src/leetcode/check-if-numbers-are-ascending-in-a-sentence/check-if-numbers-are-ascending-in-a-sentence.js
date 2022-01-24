/**
 * Leetcode #2042
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const areNumbersAscending = s => {
  const split = s.split(' ');
  let prevNum = -1;

  for (const word of split) {
    const num = Number(word);

    if (Number.isNaN(num)) {
      continue;
    }

    if (prevNum >= num) {
      return false;
    }

    prevNum = num;
  }

  return true;
};
