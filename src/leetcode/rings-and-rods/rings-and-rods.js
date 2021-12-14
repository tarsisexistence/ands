/**
 * Leetcode #2103
 * Difficulty: Easy
 * https://leetcode.com/problems/rings-and-rods/
 */
/**
 * @param {string} rings
 * @return {number}
 */
export const countPoints = rings => {
  const array = new Array(10).fill('');
  let count = 0;

  for (let i = 0; i < rings.length; i += 2) {
    array[rings[i + 1]] += rings[i];
  }

  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];

    if (value.includes('R') && value.includes('G') && value.includes('B')) {
      count += 1;
    }
  }

  return count;
};
