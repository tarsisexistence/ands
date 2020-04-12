/**
 * Leetcode #1046
 * Difficulty: Easy
 * https://leetcode.com/problems/last-stone-weight/
 */
/**
 * @param {number[]} stones
 * @return {number}
 */
export const lastStoneWeight = stones => {
  let arr = stones;
  while (arr.length > 1) {
    arr = turn(arr);
  }

  return arr[0] || 0;

  function turn(innerArr) {
    const [first, second, ...rest] = innerArr.sort((a, b) => b - a);

    if (first !== second) {
      rest.push(Math.abs(first - second));
    }

    return rest;
  }
};
