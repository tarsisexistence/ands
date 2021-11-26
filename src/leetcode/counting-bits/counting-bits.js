/**
 * Leetcode #338
 * Difficulty: Easy
 * https://leetcode.com/problems/counting-bits/
 */
/**
 * @param {number} n
 * @return {number[]}
 */
export const countBits = n => {
  const ans = new Uint8Array(n + 1);

  for (let i = 0; i < n + 1; i += 1) {
    const bin = i.toString(2);
    let count = 0;

    for (let j = 0; j < bin.length; j += 1) {
      if (bin[j] === '1') {
        count += 1;
      }
    }

    ans[i] = count;
  }

  return ans;
};
