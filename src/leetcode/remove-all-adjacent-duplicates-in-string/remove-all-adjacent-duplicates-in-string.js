/**
 * Leetcode #1047
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */
/**
 * @param {string} S
 * @return {string}
 */
export const removeDuplicates = S => {
  const stack = [];

  for (let i = 0; i < S.length; i += 1) {
    if (stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.join('');
};

// const removeDuplicates = S => {
//     const arr = S.split('');

//     for (let i = 1; i < arr.length; i += 1) {
//         if (arr[i] === arr[i - 1]) {
//             arr.splice(i - 1, 2);
//             i -= 2;
//         }
//     }

//     return arr.join('');
// };
