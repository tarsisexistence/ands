/**
 * Leetcode #1544
 * Difficulty: Easy
 * https://leetcode.com/problems/make-the-string-great/
 */
/**
 * @param {string} s
 * @return {string}
 */
export const makeGood = s => {
  const stack = [];

  for (const c of s) {
    const last = stack.at(-1);

    if (last && c !== last && c.toLowerCase() === last.toLowerCase()) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
};

// const makeGood = s => {
//   const arr = s.split('');
//
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] && arr[i + 1] && arr[i] !== arr[i + 1] && arr[i].toLowerCase() === arr[i + 1].toLowerCase()) {
//       arr.splice(i, 2);
//       i -= 2;
//     }
//   }
//
//   return arr.join('');
// };

// export const makeGood = s => {
//   const arr = s.split('');
//
//   for (let i = 0; i < arr.length; i += 1) {
//     const ax = arr[i] ? arr[i].toLowerCase() : '';
//     const bx = arr[i + 1] ? arr[i + 1].toLowerCase() : '';
//     const a = arr[i] === ax;
//     const b = arr[i + 1] && arr[i + 1] === bx;
//
//     if (arr[i] && arr[i + 1] && ax === bx && ((a && !b) || (!a && b))) {
//       arr.splice(i, 2);
//       i = Math.min(0, i - 2);
//     }
//   }
//
//   return arr.join('');
// };

// export const makeGood = s => {
//   let str = '';
//
//   for (let i = 0; i < s.length; i += 1) {
//     const ax = s[i].toLowerCase();
//     const bx = s[i + 1] ? s[i + 1].toLowerCase() : '';
//     const a = s[i] === ax;
//     const b = s[i + 1] && s[i + 1] === bx;
//
//     if (s[i + 1] && ax === bx && ((a && !b) || (!a && b))) {
//       i += 1;
//     } else {
//       str += s[i];
//     }
//   }
//
//   return s === str ? s : makeGood(str);
// };
