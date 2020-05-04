/**
 * Leetcode #1009
 * Difficulty: Easy
 * https://leetcode.com/problems/complement-of-base-10-integer/
 * Duplicate of 476 number-complement
 */
/**
 * @param {number} N
 * @return {number}
 */
export const bitwiseComplement = N => {
  const binNum = N.toString(2);
  let binComplement = '';

  for (let i = 0; i < binNum.length; i += 1) {
    binComplement += binNum[i] === '0' ? '1' : '0';
  }

  return parseInt(binComplement, 2);
};
