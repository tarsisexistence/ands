/**
 * Leetcode #347
 * Difficulty: Medium
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const topKFrequent = (nums, k) => {
  const freq = {};
  const unique = [];

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    if (freq[num] === undefined) {
      unique.push(num);
    }

    freq[num] = (freq[num] || 0) + 1;
  }

  return unique.sort((a, b) => freq[b] - freq[a]).slice(0, k);
};

// export const topKFrequent = (nums, k) => {
//   const freq = {};
//
//   for (let i = 0; i < nums.length; i += 1) {
//     const num = nums[i];
//     freq[num] = (freq[num] || 0) + 1;
//   }
//
//   const bucket = Object.keys(freq).reduce((acc, num) => {
//     const frequency = freq[num];
//
//     if (acc[frequency] === undefined) {
//       acc[frequency] = [];
//     }
//
//     const value = acc[frequency];
//     value.push(Number(num));
//     return acc;
//   }, {});
//
//   return Object.keys(bucket).reduceRight((acc, frequency) => {
//     if (k <= 0) {
//       return acc;
//     }
//
//     const values = bucket[frequency];
//     let index = 0;
//
//     while (index < k && index < values.length) {
//       acc.push(values[index]);
//       index += 1;
//     }
//
//     k -= index;
//
//     return acc;
//   }, []);
// };
