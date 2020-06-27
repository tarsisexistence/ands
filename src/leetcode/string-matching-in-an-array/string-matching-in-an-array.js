/**
 * Leetcode #1408
 * Difficulty: Easy
 * https://leetcode.com/problems/string-matching-in-an-array/
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
export const stringMatching = words =>
  words.filter(word =>
    words.some(_word => word !== _word && _word.includes(word))
  );

// export const stringMatching = words => words.filter(word => {
//   for (let j = 0; j < words.length; j += 1) {
//     if (word !== words[j] && words[j].includes(word)) {
//       return true;
//     }
//   }
//
//   return false;
// });
