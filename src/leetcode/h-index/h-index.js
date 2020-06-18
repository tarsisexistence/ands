/**
 * Leetcode #274
 * Difficulty: Medium
 * https://leetcode.com/problems/h-index/
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
export const hIndex = citations => {
  citations.sort((a, b) => a - b);
  let index = 0;

  for (let i = citations.length - 1; i >= 0; i -= 1) {
    const num = citations[i];

    if (num < index + 1) {
      break;
    }

    index += 1;
  }

  return index;
};
