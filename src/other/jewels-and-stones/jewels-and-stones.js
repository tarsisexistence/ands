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
    const stoneTypesMap = stoneTypes.split('').reduce((types, type) => {
        types[type] = true;
        return types;
    }, {});

    return stonesInStock
        .split('')
        .reduce((numJewels, stoneInStock) => stoneTypesMap[stoneInStock] ? numJewels + 1 : numJewels, 0)
};
