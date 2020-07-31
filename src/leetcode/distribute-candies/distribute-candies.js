/**
 * Leetcode #575
 * Difficulty: Easy
 * https://leetcode.com/problems/distribute-candies/
 */
/**
 * @param {number[]} candies
 * @return {number}
 */
export const distributeCandies = candies => Math.min(new Set(candies).size, candies.length / 2);

// export const distributeCandies = candies => {
//   const candiesMap = {};
//   let kinds = 0;
//   let duplicatedKinds = 0;
//   let extra = 0;
//
//   for (let i = 0; i < candies.length; i += 1) {
//     const type = candies[i];
//
//     if (candiesMap[type] === undefined) {
//       candiesMap[type] = true;
//       kinds += 1;
//     } else if (candiesMap[type]) {
//       duplicatedKinds += 1;
//       candiesMap[type] = false;
//     } else {
//       extra += 1;
//     }
//   }
//
//   const unique = kinds - duplicatedKinds;
//   let count = duplicatedKinds;
//
//   if (extra >= unique) {
//     count += unique;
//   } else {
//     count += extra + Math.ceil((unique - extra) / 2);
//   }
//
//   return count;
// };
