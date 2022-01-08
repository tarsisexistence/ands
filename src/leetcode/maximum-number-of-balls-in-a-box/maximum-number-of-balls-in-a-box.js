/**
 * Leetcode #1189
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-number-of-balloons/
 */
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
export const countBalls = (lowLimit, highLimit) => {
  const map = new Map();

  for (let i = lowLimit; i <= highLimit; i += 1) {
    const digits = i.toString();
    let sum = 0;

    for (let j = 0; j < digits.length; j += 1) {
      sum += Number(digits[j]);
    }

    map.set(sum, (map.get(sum) ?? 0) + 1);
  }

  return Math.max(...map.values());
};

// export const countBalls = (lowLimit, highLimit) => {
//   const map = new Map();
//
//   for (let i = lowLimit; i <= highLimit; i += 1) {
//     const str = i.toString();
//     let sum = 0;
//
//     for (let j = 0; j < str.length; j += 1) {
//       sum += Number(str[j]);
//     }
//
//     map.set(sum, (map.get(sum) ?? 0) + 1);
//   }
//
//   let max = 0;
//
//   for (const [, count] of map) {
//     if (count > max) {
//       max = count;
//     }
//   }
//
//   return max;
// };
