/**
 * Leetcode #500
 * Difficulty: Easy
 * https://leetcode.com/problems/keyboard-row/
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
export const findWords = words => {
  const firstRow = 'qwertyuiop';
  const secondRow = 'asdfghjkl';
  const thirdRow = 'zxcvbnm';

  return words.filter(word => {
    const firstChar = word[0].toLowerCase();
    const keyboardRow = firstRow.includes(firstChar) ? firstRow : secondRow.includes(firstChar) ? secondRow : thirdRow;

    for (let i = 0; i < word.length; i += 1) {
      if (!keyboardRow.includes(word[i].toLowerCase())) {
        return false;
      }
    }

    return true;
  });
};

// const findWords = words => {
//     const firstRow = { q: true, w: true, e: true, r: true, t: true, y: true, u: true, i: true, o: true, p: true };
//     const secondRow = { a: true, s: true, d: true, f: true, g: true, h: true, j: true, k: true, l: true };
//     const thirdRow = { z: true, x: true, c: true, v: true, b: true, n: true, m: true };
//     const result = [];

//     for (let i = 0; i < words.length; i += 1) {
//         const firstLetter = words[i][0].toLowerCase();
//         let row = firstRow[firstLetter] ? firstRow : secondRow[firstLetter] ? secondRow : thirdRow;
//         let isOk = true;

//         for (let j = 0; j < words[i].length; j += 1) {
//             if (row[words[i][j].toLowerCase()] === undefined) {
//                 isOk = false;
//                 break;
//             }
//         }

//         if (isOk) {
//             result.push(words[i]);
//         }
//     }

//     return result;
// };
