/**
 * Leetcode #1103
 * Difficulty: Easy
 * https://leetcode.com/problems/distribute-candies-to-people/
 */
/**
 * @param {number} candies
 * @param {number} length
 * @return {number[]}
 */
export const distributeCandies = (candies, length) => {
  const people = Array.from({ length }, () => 0);
  let lap = 0;

  while (candies > 0) {
    for (let i = 0; i < length && candies > 0; i += 1) {
      const value = lap * length + i + 1;
      const left = Math.min(candies, value);
      candies -= left;
      people[i] += left;
    }

    lap += 1;
  }

  return people;
};
