/**
 * Leetcode #274
 * Difficulty: Medium
 * https://leetcode.com/problems/h-index/
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
export const hIndex = citations => {
  citations.sort((a, b) => a - b);
  let index = 0;

  for (let i = citations.length - 1; i >= 0; i -= 1) {
    const num = citations[i];

    if (num < index + 1) {
      break;
    }

    index += 1;
  }

  return index;
};

// export const hIndex = citations => {
//   let index = 0;
//   const map = {};
//
//   for (let i = citations.length - 1; i >= 0; i -= 1) {
//     const num = citations[i];
//     map[num] = (map[num] || 0) + 1;
//   }
//
//   const sortedNums = Object.keys(map);
//
//   for (let i = sortedNums.length - 1; i >= 0; i -= 1) {
//     const num = Number(sortedNums[i]);
//
//     if (num < index + 1) {
//       break;
//     }
//
//     const increment = Math.min(Number(num), map[num])
//     index += increment + index <= num ? increment : num - index;
//   }
//
//   return index;
// };
