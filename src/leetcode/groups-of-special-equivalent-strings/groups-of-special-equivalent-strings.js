/**
 * Leetcode #893
 * Difficulty: Easy
 * https://leetcode.com/problems/groups-of-special-equivalent-strings/
 */
/**
 * @param {string[]} A
 * @return {number}
 */
export const numSpecialEquivGroups = A => {
  const set = new Set();

  for (let i = 0; i < A.length; i += 1) {
    set.add(transform(A[i]));
  }

  return set.size;

  function transform(S) {
    const even = [];
    const odd = [];

    for (let i = 0; i < S.length; i += 1) {
      if (i % 2 === 0) {
        even.push(S[i]);
      } else {
        odd.push(S[i]);
      }
    }

    even.sort();
    odd.sort();

    return `${even.join('')}${odd.join('')}`;
  }
};
