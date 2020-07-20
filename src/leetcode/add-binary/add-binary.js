/**
 * Leetcode #67
 * Difficulty: Easy
 * https://leetcode.com/problems/add-binary/
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = (a, b) => {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let sum = '';

  while (i >= 0 || j >= 0 || carry > 0) {
    const v1 = a[i] || 0;
    const v2 = b[j] || 0;
    let v1v2 = Number(v1) + Number(v2) + carry;

    carry = v1v2 > 1 ? 1 : 0;
    v1v2 = v1v2 % 2 === 1 ? 1 : 0;

    sum = v1v2 + sum;
    i -= 1;
    j -= 1;
  }

  return sum;
};

// export const addBinary = (a, b) => {
//   let i = a.length - 1;
//   let j = b.length - 1;
//   let carry = 0;
//   let sum = '';
//
//   while (i >= 0 || j >= 0 || carry > 0) {
//     const v1 = a[i] || 0;
//     const v2 = b[j] || 0;
//     let v1v2 = Number(v1) + Number(v2) + carry;
//
//     if (v1v2 === 3) {
//         v1v2 = 1;
//         carry = 1;
//     } else if (v1v2 === 2) {
//         v1v2 = 0;
//         carry = 1;
//     } else {
//         carry = 0;
//     }
//
//     sum = v1v2 + sum;
//     i -= 1;
//     j -= 1;
//   }
//
//   return sum;
// };

// const addBinary = (a, b) => {
//     const A = BigInt(`0b${a}`);
//     const B = BigInt(`0b${b}`);
//     return (A + B).toString(2);
// };
