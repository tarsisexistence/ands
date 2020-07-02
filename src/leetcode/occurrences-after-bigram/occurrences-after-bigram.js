/**
 * Leetcode #1078
 * Difficulty: Easy
 * https://leetcode.com/problems/occurrences-after-bigram/
 */
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
export const findOccurrences = (text, first, second) => {
  const words = text.split(' ');
  const thirds = [];

  for (let i = 0; i < words.length; i += 1) {
    if (
      words[i] === second &&
      words[i - 1] === first &&
      words[i + 1] !== undefined
    ) {
      thirds.push(words[i + 1]);
    }
  }

  return thirds;
};
