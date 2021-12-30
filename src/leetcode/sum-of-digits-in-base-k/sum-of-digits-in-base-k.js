/**
 * Leetcode #1837
 * Difficulty: Easy
 * https://leetcode.com/problems/sum-of-digits-in-base-k/
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
export const sumBase = (n, k) => {
  const based = n.toString(k);
  let ans = 0;

  for (let i = 0; i < based.length; i += 1) {
    ans += Number(based[i]);
  }

  return ans;
};

// const sumBase = (n, k) => {
//   let ans = 0;
//
//   while (n > 0) {
//     ans += Math.trunc(n % k);
//     n /= k;
//   }
//
//   return ans;
// };
