/**
 * Leetcode #728
 * Difficulty: Easy
 * https://leetcode.com/problems/self-dividing-numbers/
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
export const selfDividingNumbers = (left, right) => {
  const output = [];

  for (let i = left; i <= right; i += 1) {
    let isDivisible = true;

    for (const num of String(i)) {
      if (i % num !== 0) {
        isDivisible = false;
        break;
      }
    }

    if (isDivisible) {
      output.push(i);
    }

    //         let digits = i;
    //         let isDivisible = true;

    //         while (digits > 1) {
    //             const lastDigit = digits % 10;

    //             if (lastDigit === 0 || i % lastDigit !== 0) {
    //                 isDivisible = false;
    //                 break;
    //             }

    //             digits = Math.floor(digits / 10);
    //         }

    //         if (isDivisible) {
    //             output.push(i)
    //         }
  }

  return output;
};
