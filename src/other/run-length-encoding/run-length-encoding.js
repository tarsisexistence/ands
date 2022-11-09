/**
 * Run-length encoding
 *
 * Given a string consisting of the letters A-Z:
 * "AABBBCCXYZ"
 * You need to write the RLE function, which will output a string like:
 * "A2B3C2XYZ"
 * (please see "questions.spec.js" for more examples)
 *
 * Explanation:
 * 1. if the symbol occurs 1 time, it remains unchanged
 * 2. if the symbol is repeated more than 1 time, the number of repetitions is added to it
 */

export function rle(str) {
  let result = '';
  let count = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      const formatted = count === 0 ? '' : count + 1;
      result += `${str[i]}${formatted}`;
      count = 0;
    }
  }

  return result;
}
