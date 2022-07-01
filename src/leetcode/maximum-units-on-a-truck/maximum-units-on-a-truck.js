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
  let result = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length && truckSize > 0; i += 1) {
    const [boxes, units] = boxTypes[i];

    const newTruckSize = Math.max(truckSize - boxes, 0);
    const diff = truckSize - newTruckSize;
    truckSize = newTruckSize;
    result += diff * units;
  }

  return result;
};

// export const maximumUnits = (boxTypes, truckSize) => {
//   let max = 0;
//
//   boxTypes.sort((a, b) => b[1] - a[1]);
//
//   for (let i = 0; i < boxTypes.length; i += 1) {
//     let [boxes, units] = boxTypes[i];
//
//     while (boxes > 0 && truckSize > 0) {
//       boxes -= 1;
//       truckSize -= 1;
//       max += units;
//     }
//
//     if (truckSize === 0) {
//       break;
//     }
//   }
//
//   return max;
// };
