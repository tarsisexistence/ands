/**
 * Leetcode #
 * Premium
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
export const countElements = arr => {
  const map = {};
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];
    map[num] = map[num] ? map[num] + 1 : 1;
  }

  for (let i = 0; i < arr.length; i += 1) {
    const num = arr[i];

    if (map[num + 1]) {
      count += 1;
    }
  }

  return count;
};
