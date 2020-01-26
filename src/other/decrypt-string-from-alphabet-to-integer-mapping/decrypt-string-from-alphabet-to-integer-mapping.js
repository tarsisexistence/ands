/**
 * Leetcode #1309
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const freqAlphabets = s => {
  let result = '';

  for (let i = 0; i < s.length; i += 1) {
    let code = s[i];

    if (s[i + 2] === '#') {
      code += s[i+1];
      i += 2;
    }

    result += String.fromCharCode(96 + Number(code));
  }

  return result;
};
