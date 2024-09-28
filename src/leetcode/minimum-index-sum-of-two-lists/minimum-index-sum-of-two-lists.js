/**
 * Leetcode #599
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-index-sum-of-two-lists
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
export const findRestaurant = (list1, list2) => {
  const map1 = new Map();
  const map = new Map();

  for (let i = 0; i < list1.length; i += 1) {
    map1.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i += 1) {
    const prev = map1.get(list2[i]);

    if (prev !== undefined) {
      map.set(list2[i], prev + i);
    }
  }

  let min = Infinity;
  let res = [];

  for (const [key, value] of map) {
    if (value < min) {
      res = [key];
      min = value;
    } else if (value === min) {
      res.push(key);
    }
  }

  return res;
};
