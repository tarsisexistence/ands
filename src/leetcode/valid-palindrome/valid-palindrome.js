/**
 * Leetcode #125
 * Difficulty: Easy
 * https://leetcode.com/problems/valid-palindrome/
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// export const isPalindrome = s => {
//   const chars = [];
//
//   for (let i = 0; i < s.length; i += 1) {
//     const char = s[i].toLowerCase();
//     const code = char.charCodeAt();
//     const isNumerical = code >= 48 && code <= 57;
//     const isAlphabetical = code >= 97 && code <= 122;
//
//     if (isNumerical || isAlphabetical) {
//       chars.push(char);
//     }
//   }
//
//   return chars.join('') === chars.reverse().join('');
// };

export const isPalindrome = s => {
  let chars = '';

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i].toLowerCase();
    const code = char.charCodeAt();
    const isNumerical = code >= 48 && code <= 57;
    const isAlphabetical = code >= 97 && code <= 122;

    if (isNumerical || isAlphabetical) {
      chars += char;
    }
  }

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] !== chars[chars.length - i - 1]) {
      return false;
    }
  }

  return true;
};
