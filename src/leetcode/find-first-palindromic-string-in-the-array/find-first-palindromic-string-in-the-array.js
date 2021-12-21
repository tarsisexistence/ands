/**
 * Leetcode #2108
 * Difficulty: Easy
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 */
/**
 * @param {string[]} words
 * @return {string}
 */
export const firstPalindrome = words => {
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const len = word.length;
    let isPalindrome = true;

    for (let j = 0; j < Math.floor(len / 2); j += 1) {
      if (word[j] !== word[len - 1 - j]) {
        isPalindrome = false;
        break;
      }
    }

    if (isPalindrome) {
      return word;
    }
  }

  return '';
};
