/**
 * Leetcode #1876
 * Difficulty: Easy
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
 * Algorithm: Sliding window
 */
/**
 * @param {string} s
 * @return {number}
 */
export const countGoodSubstrings = s => {
  const map = new Map();
  let res = 0;

  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);

    if (i > 2) {
      const prev = s[i - 3];
      const prevValue = map.get(prev);
      map.set(prev, prevValue - 1);

      if (prevValue - 1 === 0) {
        map.delete(prev);
      }
    }

    if (map.size === 3) {
      res += 1;
    }
  }

  return res;
};

// export const countGoodSubstrings = s => {
//   let count = 0;
//
//   for (let i = 0; i < s.length - 2; i += 1) {
//     if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
//       count += 1;
//     }
//   }
//
//   return count;
// };
