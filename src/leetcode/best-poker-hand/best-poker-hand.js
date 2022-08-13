/**
 * Leetcode #2347
 * Difficulty: Easy
 * https://leetcode.com/problems/best-poker-hand/
 */
/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
export const bestHand = (ranks, suits) => {
  if (suits.every(suit => suit === suits[0])) {
    return 'Flush';
  }

  const map = new Map();
  let max = 0;

  for (const rank of ranks) {
    const prev = map.get(rank) ?? 0;
    const next = prev + 1;
    max = Math.max(max, next);
    map.set(rank, next);
  }

  return max > 2 ? 'Three of a Kind' : max === 2 ? 'Pair' : 'High Card';
};
