/**
 * Leetcode #1763
 * Difficulty: Easy
 * https://leetcode.com/problems/longest-nice-substring/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const longestNiceSubstring = s => {
  if (s.length < 2) {
    return '';
  }

  const map = new Map();

  for (const c of s) {
    map.set(c, c);
  }

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];

    if (map.has(c.toUpperCase()) === map.has(c.toLowerCase())) {
      continue;
    }

    const left = longestNiceSubstring(s.slice(0, i));
    const right = longestNiceSubstring(s.slice(i + 1));

    return left.length >= right.length ? left : right;
  }

  return s;
};
