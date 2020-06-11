/**
 * Leetcode #392
 * Difficulty: Easy
 * https://leetcode.com/problems/is-subsequence/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = (s, t) => {
  let subsequence = 0;

  for (let i = 0; i < t.length; i += 1) {
    if (s[subsequence] === t[i]) {
      subsequence += 1;
    }
  }

  return subsequence === s.length;
};

// const isSubsequence = (s, t) => {
//     if (s.length === 0) {
//         return true;
//     } else if (t.length === 0) {
//         return false;
//     }

//     const result = Array.from({length: s.length}, () => new Array(t.length).fill(0));

//     for (let j = 0; j < t.length; j += 1) {
//         if (s[0] === t[j] || result[0][j - 1] === 1) {
//             result[0][j] = 1;
//         }
//     }

//     for (let i = 1; i < s.length; i += 1) {
//         for (let j = 1; j < t.length; j += 1) {
//             const isMatch = s[i] === t[j] && result[i-1][j-1] !== 0;

//             if (isMatch || result[i][j-1] !== 0) {
//                 result[i][j] = result[i-1][j-1] + 1;
//             }
//         }
//     }

//     return s.length === result[s.length - 1][t.length - 1];
// };
