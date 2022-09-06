/**
 * Leetcode #1422
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 */
/**
 * @param {string} s
 * @return {number}
 */
export const maxScore = s => {
  let leftId = 0;
  let max = 0;

  while (leftId !== s.length - 1) {
    let points = 0;

    for (let i = 0; i < s.length; i += 1) {
      const isRight = i > leftId;

      if ((isRight && s[i] === '1') || (!isRight && s[i] === '0')) {
        points += 1;
      }
    }

    max = Math.max(max, points);
    leftId += 1;
  }

  return max;
};

// const maxScore = s => {
//     let leftId = 0;
//     let left = 0;
//     let right = 0;
//     let max = 0;
//
//     for (let i = 0; i < s.length; i += 1) {
//         if (s[i] === '1') {
//             right += 1;
//         }
//     }
//
//
//     while (leftId !== s.length - 1) {
//         if (s[leftId] === '0') {
//             left += 1;
//         } else {
//             right -= 1;
//         }
//
//         leftId += 1;
//         max = Math.max(max, left + right);
//     }
//
//     return max;
// };
