/**
 * Leetcode #1436
 * Difficulty: Easy
 * https://leetcode.com/problems/destination-city/
 */
/**
 * @param {string[][]} paths
 * @return {string}
 */
export const destCity = paths => {
  const cityDests = new Map();

  for (const [from, to] of paths) {
    cityDests.set(from, to);
  }

  for (const [, to] of paths) {
    if (!cityDests.has(to)) {
      return to;
    }
  }
};

// const destCity = paths => {
//   const cityDests = new Map();
//
//   for (let i = 0; i < paths.length; i += 1) {
//     const [from, to] = paths[i];
//     cityDests.set(from, to);
//   }
//
//   for (let i = 0; i < paths.length; i += 1) {
//     const [, to] = paths[i];
//     if (!cityDests.has(to)) {
//       return to;
//     }
//   }
// };
