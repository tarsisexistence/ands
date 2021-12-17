/**
 * Leetcode #1844
 * Difficulty: Easy
 * https://leetcode.com/problems/replace-all-digits-with-characters/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const replaceDigits = s => {
  for (let i = 1; i < s.length; i += 2) {
    const charCode = s[i - 1].charCodeAt() + Number(s[i]);
    const value = String.fromCharCode(charCode);
    s = s.replace(s[i], value);
  }

  return s;
};

// export const replaceDigits = s => {
//   let result = '';
//
//   for (let i = 0; i < s.length; i += 1) {
//     if (i % 2 === 1) {
//       result += String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i]));
//     } else {
//       result += s[i];
//     }
//   }
//
//   return result;
// };
