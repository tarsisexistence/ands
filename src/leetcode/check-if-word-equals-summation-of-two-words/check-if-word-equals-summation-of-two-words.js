/**
 * Leetcode #1880
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
 */
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
export const isSumEqual = (firstWord, secondWord, targetWord) => {
  let first = '';
  let second = '';
  let target = '';

  for (let i = 0; i < firstWord.length; i += 1) {
    const code = firstWord[i].charCodeAt() - 97;
    first += code;
  }

  for (let i = 0; i < secondWord.length; i += 1) {
    const code = secondWord[i].charCodeAt() - 97;
    second += code;
  }

  for (let i = 0; i < targetWord.length; i += 1) {
    const code = targetWord[i].charCodeAt() - 97;
    target += code;
  }

  return Number(first) + Number(second) === Number(target);
};
