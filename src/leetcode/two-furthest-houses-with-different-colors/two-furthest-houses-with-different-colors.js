/**
 * Leetcode #2078
 * Difficulty: Easy
 * https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 */
/**
 * @param {number[]} colors
 * @return {number}
 */
export const maxDistance = colors => {
  const { length } = colors;
  let max = 0;

  for (let i = 0; i < length; i += 1) {
    if (colors[i] !== colors[0]) {
      max = Math.max(max, i);
    }

    if (colors[i] !== colors[length - 1]) {
      max = Math.max(max, length - i - 1);
    }
  }

  return max;
};

// export const maxDistance = colors => {
//   let max = 0;
//
//   for (let i = 0; i < colors.length; i += 1) {
//     let tempMax = 0;
//
//     for (let j = i + 1; j < colors.length; j += 1) {
//       if (colors[i] !== colors[j]) {
//         tempMax = j - i;
//       }
//     }
//
//     max = Math.max(max, tempMax);
//   }
//
//   return max;
// };
