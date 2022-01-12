/**
 * Leetcode #1935
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/
 */
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
export const canBeTypedWords = (text, brokenLetters) => {
  const set = new Set();
  const words = text.split(' ');
  let count = 0;

  for (let i = 0; i < brokenLetters.length; i += 1) {
    set.add(brokenLetters[i]);
  }

  for (let i = 0; i < words.length; i += 1) {
    let canBeTyped = true;

    for (let j = 0; j < words[i].length; j += 1) {
      if (set.has(words[i][j])) {
        canBeTyped = false;
        break;
      }
    }

    if (canBeTyped) {
      count += 1;
    }
  }

  return count;
};
