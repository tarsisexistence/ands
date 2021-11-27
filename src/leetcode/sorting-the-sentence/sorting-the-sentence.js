/**
 * Leetcode #1859
 * Difficulty: Easy
 * https://leetcode.com/problems/sorting-the-sentence/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const sortSentence = s => {
  const split = s.split(' ').sort((a, b) => a[a.length - 1] - b[b.length - 1]);
  let result = '';

  for (let i = 0; i < split.length - 1; i += 1) {
    result += split[i].slice(0, -1);
    result += ' ';
  }

  result += split[split.length - 1].slice(0, -1);

  return result;
};
