/**
 * Leetcode #2011
 * Difficulty: Easy
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */
/**
 * @param {number[][]} edges
 * @return {number}
 */
/**
 * @param {number[][]} edges
 * @return {number}
 */
export const findCenter = edges => {
  const [[a, b], [c, d]] = edges;

  return a === c || a === d ? a : b;
};

// export const findCenter = edges => {
//   const counts = new Map();
//
//   for (const [a, b] of edges) {
//     if (counts.has(a)) {
//       return a;
//     } else if (counts.has(b)) {
//       return b;
//     }
//
//     counts.set(a, (counts.get(a) ?? 0) + 1);
//     counts.set(b, (counts.get(b) ?? 0) + 1);
//   }
// };

// const findCenter = edges => {
//   const counts = new Map();
//
//   for (const [a, b] of edges) {
//     counts.set(a, (counts.get(a) ?? 0) + 1);
//     counts.set(b, (counts.get(b) ?? 0) + 1);
//   }
//
//   let vertex = null;
//   let max = 0;
//
//   for (const key of counts.keys()) {
//     const value = counts.get(key);
//
//     if (value > max) {
//       vertex = key;
//       max = value;
//     }
//   }
//
//   return vertex;
// };
