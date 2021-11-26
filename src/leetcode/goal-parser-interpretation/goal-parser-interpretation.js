/**
 * Leetcode #1678
 * Difficulty: Easy
 * https://leetcode.com/problems/goal-parser-interpretation/
 */
/**
 * @param {string} command
 * @return {string}
 */
export const interpret = command => {
  let result = '';

  for (let i = 0; i < command.length; i += 1) {
    let str = command[i];

    if (command[i] === 'G') {
      result += str;
    } else if (str === '(' && command[i + 1] === ')') {
      i += 1;
      result += 'o';
    } else if (str === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')') {
      result += 'al';
      i += 3;
    }
  }

  return result;
};

// var interpret = function(command) {
//     return command.split("()").join("o").split("(al)").join("al");
// };
