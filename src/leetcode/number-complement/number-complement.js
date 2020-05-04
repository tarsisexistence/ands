/**
 * Leetcode #476
 * Difficulty: Easy
 * https://leetcode.com/problems/number-complement
 */
/**
 * @param {number} num
 * @return {number}
 */
export const findComplement = num => {
  const binNum = num.toString(2);
  let binComplement = '';

  for (let i = 0; i < binNum.length; i += 1) {
    binComplement += binNum[i] === '0' ? '1' : '0';
  }

  return parseInt(binComplement, 2);
};
