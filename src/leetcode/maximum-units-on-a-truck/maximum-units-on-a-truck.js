/**
 * Leetcode #1710
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 */
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
export const maximumUnits = (boxTypes, truckSize) => {
  let max = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i += 1) {
    let [boxes, units] = boxTypes[i];

    while (boxes > 0 && truckSize > 0) {
      boxes -= 1;
      truckSize -= 1;
      max += units;
    }

    if (truckSize === 0) {
      break;
    }
  }

  return max;
};
