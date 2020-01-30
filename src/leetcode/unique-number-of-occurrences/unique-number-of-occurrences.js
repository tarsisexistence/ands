/**
 * Leetcode #1207
 * Difficulty: Easy
 * https://leetcode.com/problems/unique-number-of-occurrences/
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
export const uniqueOccurrences = arr => {
  const occurrences = {};
  const cache = arr.reduce((acc, value) => {
    acc[value] = acc[value] ? acc[value] + 1 : 1;
    return acc;
  }, {});

  for (let key in cache) {
    const times = cache[key];

    if (occurrences[times]) {
      return false;
    }

    occurrences[times] = true;
  }

  return true;
}
