/**
 * Leetcode #2085
 * Difficulty: Easy
 * https://leetcode.com/problems/count-common-words-with-one-occurrence/
 */
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
export const countWords = (words1, words2) => {
  const map1 = new Map();
  const map2 = new Map();
  let ans = 0;

  for (const word of words1) {
    map1.set(word, (map1.get(word) ?? 0) + 1);
  }

  for (const word of words2) {
    map2.set(word, (map2.get(word) ?? 0) + 1);
  }

  for (const [word, count] of map1) {
    if (count === 1 && map2.get(word) === 1) {
      ans += 1;
    }
  }

  return ans;
};
