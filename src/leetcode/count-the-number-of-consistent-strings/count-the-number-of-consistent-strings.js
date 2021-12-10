/**
 * Leetcode #1684
 * Difficulty: Easy
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 */
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
export const countConsistentStrings = (allowed, words) => {
  const allowedSet = new Set();

  for (let i = 0; i < allowed.length; i += 1) {
    allowedSet.add(allowed[i]);
  }

  let count = 0;

  for (let i = 0; i < words.length; i += 1) {
    let isConsistent = true;

    for (let j = 0; j < words[i].length; j += 1) {
      if (!allowedSet.has(words[i][j])) {
        isConsistent = false;
        break;
      }
    }

    if (isConsistent) {
      count += 1;
    }
  }

  return count;
};
