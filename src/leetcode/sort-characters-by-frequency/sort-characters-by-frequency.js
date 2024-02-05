/**
 * Leetcode #451
 * Difficulty: Medium
 * https://leetcode.com/problems/sort-characters-by-frequency/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const frequencySort = s => {
  const frequency = new Map();

  for (let i = 0; i < s.length; i += 1) {
    const current = frequency.get(s[i]);
    frequency.set(s[i], (current || 0) + 1);
  }

  return Array.from(frequency.keys())
    .sort((a, b) => {
      const af = frequency.get(a);
      const bf = frequency.get(b);

      if (bf === af) {
        return b > a ? 1 : -1;
      } else {
        return bf - af;
      }
    })
    .map(char => char.repeat(frequency.get(char)))
    .join('');
};
