/**
 * Leetcode #520
 * Difficulty: Easy
 * https://leetcode.com/problems/detect-capital/
 */
/**
 * @param {string} word
 * @return {boolean}
 */
export const detectCapitalUse = word => {
  if (word.length === 1) {
    return true;
  }

  const isFirstCapital = word[0] === word[0].toUpperCase();
  const isSecondCapital = word[1] === word[1].toUpperCase();

  if (isFirstCapital && isSecondCapital) {
    for (const c of word) {
      if (c === c.toLowerCase()) {
        return false;
      }
    }

    return true;
  }

  if (isFirstCapital && !isSecondCapital) {
    for (let i = 2; i < word.length; i += 1) {
      if (word[i] === word[i].toUpperCase()) {
        return false;
      }
    }

    return true;
  }

  for (const c of word) {
    if (c === c.toUpperCase()) {
      return false;
    }
  }

  return true;
};
