/**
 * Leetcode #2000
 * Difficulty: Easy
 * https://leetcode.com/problems/reverse-prefix-of-word/
 */
/**
 * @param {string} word
 * @param {string} ch
 * @return {string}
 */
export const reversePrefix = (word, ch) => {
  let reversed = '';
  let hasReversed = false;

  for (let i = 0; i < word.length; i += 1) {
    if (hasReversed) {
      reversed += word[i];
    } else {
      reversed = word[i] + reversed;
    }

    if (word[i] === ch) {
      hasReversed = true;
    }
  }

  return hasReversed ? reversed : word;
};
