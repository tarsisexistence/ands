/**
 * Leetcode #1431
 * Difficulty: Easy
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
export const kidsWithCandies = (candies, extraCandies) => {
  const greatest = Math.max(...candies);
  let candiesWithExtra = [];

  for (const kidCandies of candies) {
    candiesWithExtra.push(kidCandies + extraCandies >= greatest);
  }

  return candiesWithExtra;
};
