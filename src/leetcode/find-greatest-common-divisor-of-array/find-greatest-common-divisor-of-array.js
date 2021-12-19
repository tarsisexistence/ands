/**
 * Leetcode #1979
 * Difficulty: Easy
 * Algorithm: Euclidean https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const findGCD = nums => {
  let smallest = nums[0];
  let largest = nums[0];

  for (const num of nums) {
    if (num > largest) {
      largest = num;
    } else if (num < smallest) {
      smallest = num;
    }
  }

  return gcd(largest, smallest);

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
};

// export const findGCD = nums => {
//   let smallest = nums[0];
//   let largest = nums[0];
//
//   for (const num of nums) {
//     if (num > largest) {
//       largest = num;
//     } else if (num < smallest) {
//       smallest = num;
//     }
//   }
//
//   let divider = smallest;
//
//   while (divider > 0) {
//     if (smallest / divider === Math.ceil(smallest / divider) && largest / divider === Math.ceil(largest / divider)) {
//       break;
//     }
//
//     divider -= 1;
//   }
//
//   return divider;
// };
