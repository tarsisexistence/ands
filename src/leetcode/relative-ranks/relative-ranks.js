/**
 * Leetcode #506
 * Difficulty: Easy
 * https://leetcode.com/problems/relative-ranks/
 */
/**
 * @param {number[]} score
 * @return {string[]}
 */
export const findRelativeRanks = score => {
  const map = new Map();
  const sorted = score.slice().sort((a, b) => b - a);

  for (let i = 0; i < sorted.length; i += 1) {
    map.set(sorted[i], i);
  }

  for (let i = 0; i < score.length; i += 1) {
    const value = map.get(score[i]);
    const text =
      value === 0 ? 'Gold Medal' : value === 1 ? 'Silver Medal' : value === 2 ? 'Bronze Medal' : String(value + 1);
    score[i] = text;
  }

  return score;
};
