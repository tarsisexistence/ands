/**
 * Leetcode #1108
 * Difficulty: Easy
 * https://leetcode.com/problems/defanging-an-ip-address/
 */
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
export const decrypt = (code, k) => {
  const result = [];

  for (let i = 0; i < code.length; i += 1) {
    if (k === 0) {
      result[i] = 0;
      continue;
    }

    const asc = k > 0;
    let sum = 0;
    let count = Math.abs(k);
    let j = asc ? i + 1 : i - 1;

    while (count > 0) {
      if (code[j] === undefined) {
        j = asc ? 0 : code.length - 1;
      }

      sum += code[j];
      j += asc ? 1 : -1;
      count -= 1;
    }

    result[i] = sum;
  }

  return result;
};
