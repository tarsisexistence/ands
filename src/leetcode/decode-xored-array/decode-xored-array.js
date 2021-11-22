/**
 * Leetcode #1720
 * Difficulty: Easy
 * https://leetcode.com/problems/decode-xored-array/submissions/
 */
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
export const decode = (encoded, first) => {
  const result = [first];

  for (let i = 0; i < encoded.length; i += 1) {
    result.push(encoded[i] ^ result[i]);
  }

  return result;
};
