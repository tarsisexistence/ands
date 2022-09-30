/**
 * Leetcode #1640
 * Difficulty: Easy
 * https://leetcode.com/problems/check-array-formation-through-concatenation
 */
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
export const canFormArray = (arr, pieces) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i += 1) {
    map.set(arr[i], i);
  }

  let piecesCount = 0;

  for (let i = 0; i < pieces.length; i += 1) {
    for (let j = 0; j < pieces[i].length; j += 1) {
      const current = pieces[i][j];
      const next = pieces[i][j + 1];

      if (!map.has(current)) {
        return false;
      }

      piecesCount += 1;

      if (next === undefined || !map.has(next)) {
        continue;
      }

      const idx = map.get(current);
      const idx2 = map.get(next);

      if (idx + 1 !== idx2) {
        return false;
      }
    }
  }

  return map.size === piecesCount;
};

// export const canFormArray = (arr, pieces) => {
//   const left = arr.join('');
//   let right = '';
//
//   for (let i = 0; i < pieces.length; i += 1) {
//     const piece = pieces[i].join('');
//     right += piece;
//
//     if (!left.includes(piece)) {
//       return false;
//     }
//   }
//
//   return left.length === right.length;
// };
