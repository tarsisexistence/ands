/**
 * Leetcode #1047
 * Difficulty: Easy
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */
/**
 * @param {string} S
 * @return {string}
 */
export const removeDuplicates = s => {
  const stack = [];

  for (const c of s) {
    if (c === stack.at(-1)) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
};

// const removeDuplicates = s => {
//     const arr = s.split('');

//     for (let i = 0; i < arr.length - 1; i += 1) {
//         if (arr[i] === arr[i + 1]) {
//             arr.splice(i, 2);
//             i -= 2;
//         }
//     }

//     return arr.join('');
// };
