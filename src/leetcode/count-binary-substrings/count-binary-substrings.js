/**
 * Leetcode #696
 * Difficulty: Easy
 * https://leetcode.com/problems/count-binary-substrings/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const countBinarySubstrings = s => {
  let count = 0;
  let prev = 0;
  let current = 1;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[i - 1]) {
      current += 1;
    } else {
      count += Math.min(current, prev);
      prev = current;
      current = 1;
    }
  }

  return count + Math.min(current, prev);
};

// can't make the time limit :c but algorithm is quite accurate though
// export const countBinarySubstrings = s => {
//   let count = 0;
//
//   for (let i = 0; i < s.length; i += 1) {
//     let balance = 0;
//     let hasDifferent = false;
//
//     for (let j = i; j < s.length; j += 1) {
//       if (s[i] === s[j] && balance !== 0 && hasDifferent) {
//         break;
//       }
//
//       if (s[i] !== s[j]) {
//         hasDifferent = true;
//       }
//
//       balance += s[j] === '0' ? 1 : -1;
//
//       if (i !== j && balance === 0) {
//         count += 1;
//         break;
//       }
//     }
//   }
//
//   return count;
// };
