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

  const set = new Set(s.split(''));

  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];

    if (set.has(c.toLowerCase()) === set.has(c.toUpperCase())) {
      continue;
    }

    const left = longestNiceSubstring(s.slice(0, i));
    const right = longestNiceSubstring(s.slice(i + 1));

    return left.length >= right.length ? left : right;
  }

  return s;
};
