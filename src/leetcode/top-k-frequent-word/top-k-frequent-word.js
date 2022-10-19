/**
 * Leetcode #692
 * Difficulty: Medium
 * https://leetcode.com/problems/top-k-frequent-words/description/
 */
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
export const topKFrequent = (words, k) => {
  const map = new Map();
  const set = new Set(words);

  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }

  return Array.from(set)
    .sort((a, b) => {
      const va = map.get(a);
      const vb = map.get(b);

      if (va === vb) {
        return a < b ? -1 : 1;
      }

      return vb - va;
    })
    .slice(0, k);
};
