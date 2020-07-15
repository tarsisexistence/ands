/**
 * Leetcode #151
 * Difficulty: Medium
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const reverseWords = s => {
  let result = '';
  let current = '';

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== ' ') {
      current += s[i];
    } else {
      const charBetween = result.length > 0 && current.length > 0 ? ' ' : '';
      result = current + charBetween + result;
      current = '';
    }
  }

  const charBetween = result.length > 0 && current.length > 0 ? ' ' : '';
  result = current + charBetween + result;

  return result;
};

// export const reverseWords = s =>
//   s
//     .split(' ')
//     .filter(word => word.length > 0)
//     .reverse()
//     .join(' ');

// export const reverseWords = s => {
//   const words = [];
//   let current = '';
//
//   for (let i = 0; i < s.length; i += 1) {
//     if (s[i] !== ' ') {
//       current += s[i];
//     } else if (current.length > 0) {
//       words.push(current);
//       current = '';
//     }
//   }
//
//   if (current.length > 0) {
//     words.push(current);
//   }
//
//   return words.reverse().join(' ');
// };
