/**
 * Leetcode #884
 * Difficulty: Easy
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
export const uncommonFromSentences = (A, B) => {
  const allWords = A.split(' ').concat(B.split(' '));
  const wordsMap = allWords.reduce((acc, word) => {
    const value = acc[word];
    acc[word] = value === undefined ? 1 : value + 1;
    return acc;
  }, {});

  return Object.keys(wordsMap).filter(word => wordsMap[word] === 1);
};
