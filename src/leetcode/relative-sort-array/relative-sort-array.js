/**
 * Leetcode #1122
 * Difficulty: Easy
 * https://leetcode.com/problems/relative-sort-array/
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
export const relativeSortArray = (arr1, arr2) => {
  const map = new Map(arr2.map((num, index) => [num, index]));

  return arr1.sort((a, b) => {
    const hasIndexA = map.has(a);
    const hasIndexB = map.has(b);

    if (!hasIndexA && !hasIndexB) {
      return a - b;
    }

    if (hasIndexA && hasIndexB) {
      return map.get(a) - map.get(b);
    }

    return hasIndexA ? -1 : 1;
  });
};
