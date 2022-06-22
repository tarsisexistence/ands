/**
 * Leetcode #2138
 * Difficulty: Easy
 * https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/
 */
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
export const divideString = function (s, k, fill) {
  const result = [];

  for (let i = 0; i < s.length; i += k) {
    const sub = s.substring(i, i + k);

    result.push(sub);
  }

  const last = result[result.length - 1];

  if (last.length < k) {
    result[result.length - 1] += fill.repeat(k - last.length);
  }

  return result;
};
