/**
 * Leetcode #821
 * Difficulty: Easy
 * https://leetcode.com/problems/shortest-distance-to-a-character/
 */
/**
 * @param {string} S
 * @param {string} C
 * @return {number[]}
 */
export const shortestToChar = (S, C) => {
  const { length } = S;
  const result = new Array(length).fill(0);

  function indexOfC(next) {
    for (let i = next; i < length; i += 1) {
      if (S[i] === C) {
        return i;
      }
    }

    return -1;
  }

  let next1 = indexOfC(0);
  let next2 = indexOfC(next1 + 1);

  if (next2 === -1) {
    next2 = next1;
  }

  for (let i = 0; i < length; i += 1) {
    result[i] = Math.min(Math.abs(next1 - i), Math.abs(next2 - i));

    if (next2 === i) {
      const temp = indexOfC(next2 + 1);

      if (temp !== -1) {
        next1 = next2;
        next2 = temp;
      }
    }
  }

  return result;
};
