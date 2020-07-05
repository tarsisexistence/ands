/**
 * Leetcode #682
 * Difficulty: Easy
 * https://leetcode.com/problems/baseball-game/
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
export const calPoints = ops => {
  let result = 0;

  for (let i = 0; i < ops.length; i += 1) {
    const op = ops[i];

    if (op === 'C') {
      result -= ops[i - 1];
      ops.splice(i - 1, 2);
      i -= 2;
      continue;
    }

    if (op === '+') {
      ops[i] = ops[i - 1] + ops[i - 2];
    } else if (op === 'D') {
      ops[i] = ops[i - 1] * 2;
    } else {
      ops[i] = Number(op);
    }

    result += ops[i];
  }

  return result;
};

// const calPoints = ops => {
//     const stack = [];

//     for (let i = 0; i < ops.length; i += 1) {
//         const op = ops[i];
//         const { length } = stack;

//         if (op === '+') {
//             const value = stack[length - 1] + stack[length - 2];
//             stack.push(value);
//         } else if (op === 'C') {
//             stack.pop();
//         } else if (op === 'D') {
//             const last = stack[length - 1];
//             stack.push(last * 2);
//         } else {
//             stack.push(Number(op));
//         }
//     }

//     return stack.reduce((acc, num) => num + acc, 0);
// };
