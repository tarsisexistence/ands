/**
 * Leetcode #1370
 * Difficulty: Easy
 * https://leetcode.com/problems/increasing-decreasing-string/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const sortString = s => {
  const map = s.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  let alph = '';
  let res = '';

  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i += 1) {
    const char = String.fromCharCode(i);
    if (map[char] !== undefined) {
      alph += char;
    }
  }

  while (res.length !== s.length) {
    for (let i = 0; i < alph.length; i += 1) {
      const char = alph[i];

      if (map[char] > 0) {
        map[char] -= 1;
        res += char;
      }
    }

    for (let i = alph.length - 1; i >= 0; i -= 1) {
      const char = alph[i];

      if (map[char] > 0) {
        map[char] -= 1;
        res += char;
      }
    }
  }

  return res;
};
