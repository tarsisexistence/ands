/**
 * Leetcode #1089
 * Difficulty: Easy
 * https://leetcode.com/problems/duplicate-zeros
 */
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
export const duplicateZeros = arr => {
  const len = arr.length;
  const res = arr.slice().reverse();

  for (let i = 0; i < len; i += 1) {
    const value = res.pop();
    arr[i] = value;

    if (value === 0 && i !== len - 1) {
      arr[i + 1] = value;
      i += 1;
    }
  }
};

// const duplicateZeros = arr => {
//     const len = arr.length;

//     for (let i = 0; i < len; i += 1) {
//         if (arr[i] === 0) {
//             arr.splice(i, 0, 0);
//             arr.pop();
//             i += 1;
//         }
//     }
// };
