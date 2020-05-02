/**
 * Leetcode #771
 * Difficulty: Easy
 * https://leetcode.com/problems/jewels-and-stones/
 */
/**
 * @param {string} stoneTypes
 * @param {string} stonesInStock
 * @return {number}
 */
export const numJewelsInStones = (stoneTypes, stonesInStock) => {
  let jewels = 0;
  const stoneTypesMap = Object.fromEntries(
    stoneTypes.split('').map(jewel => [jewel, true])
  );

  for (let i = 0; i < stonesInStock.length; i += 1) {
    if (stoneTypesMap[stonesInStock[i]]) {
      jewels += 1;
    }
  }

  return jewels;
};
