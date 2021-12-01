/**
 * Leetcode #2006
 * Difficulty: Easy
 * https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
 */
/**
 * @param {number} n
 * @return {number}
 */
export const numberOfMatches = n => {
  let matches = 0;

  while (n > 1) {
    const value = n / 2;
    matches += Math.floor(value);
    n = Math.ceil(value);
  }

  return matches;
};

// const numberOfMatches = n => n - 1;

// const numberOfMatches = n => {
//   let matches = 0;
//
//   while (true) {
//     const value = n / 2;
//
//     if (value < 1) {
//       return matches;
//     }
//
//     matches += Math.floor(value);
//     n = Math.ceil(value);
//   }
// };
