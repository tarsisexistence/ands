/**
 * Leetcode #2399
 * Difficulty: Easy
 * https://leetcode.com/problems/check-distances-between-same-letters/
 */
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
export const checkDistances = (s, distance) => {
  const set = new Set();

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];

    if (set.has(c)) {
      continue;
    }

    const index = i + distance[c.charCodeAt(0) - 97] + 1;

    if (c !== s[index]) {
      return false;
    }

    set.add(c);
  }

  return true;
};
