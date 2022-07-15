/**
 * Leetcode #389
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-difference/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
export const findTheDifference = (s, t) => {
  const map = new Map();

  for (let i = 0; i < t.length; i += 1) {
    map.set(t[i], (map.get(t[i]) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], (map.get(s[i]) ?? 0) - 1);
  }

  for (const [key, value] of map) {
    if (value > 0) {
      return key;
    }
  }

  return null;
};

// export const findTheDifference = (s, t) => {
//   const a = s.split('').reduce((acc, v) => acc + v.charCodeAt(), 0);
//   const b = t.split('').reduce((acc, v) => acc + v.charCodeAt(), 0);
//
//   return String.fromCharCode(b - a);
// };
