/**
 * Leetcode #2810
 * Difficulty: Easy
 * https://leetcode.com/problems/faulty-keyboard
 */
/**
 * @param {string} s
 * @return {string}
 */
export const finalString = function (s) {
  let answer = '';
  let revAnswer = '';

  for (const c of s) {
    if (c === 'i') {
      const temp = answer;
      answer = revAnswer;
      revAnswer = temp;
    } else {
      answer += c;
      revAnswer = c + revAnswer;
    }
  }

  return answer;
};
