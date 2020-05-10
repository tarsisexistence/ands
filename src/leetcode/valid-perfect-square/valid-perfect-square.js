/**
 * Leetcode #367
 * Difficulty: Easy
 * https://leetcode.com/problems/valid-perfect-square/
 */
/**
 * @param {number} num
 * @return {boolean}
 */
export const isPerfectSquare = num => {
  let current = 1;

  while (true) {
    const calc = current ** 2;

    if (calc > num) {
      return false;
    } else if (calc === num) {
      return true;
    }

    current += 1;
  }
};

// Taylor series
// var isPerfectSquare = function(num) {
//   //taylor series
//   // 1+3+5+7 = 16 ..
//   let i = 1;
//   while(num > 0){
//     num -= i;
//     i += 2
//   }
//   return num === 0
// };
