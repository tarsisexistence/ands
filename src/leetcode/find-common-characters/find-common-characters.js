/**
 * Leetcode #1002
 * Difficulty: Easy
 * https://leetcode.com/problems/find-common-characters/
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
export const commonChars = A => {
  let answer = A[0].split('');

  for (let i = 1; i < A.length; i += 1) {
    const current = A[i].split('');

    answer = answer.filter(char => {
      const currentCharId = current.indexOf(char);

      if (currentCharId === -1) {
        return false;
      }

      current.splice(currentCharId, 1);
      return true;
    });
  }

  return answer;
};

// export const commonChars = A => {
//   const common = [];
//   const map = new Map();
//
//   for (let i = 0; i < A[0].length; i += 1) {
//     const char = A[0][i];
//
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//
//   for (let i = 1; i < A.length; i += 1) {
//     const innerMap = {};
//
//     for (let j = 0; j < A[i].length; j += 1) {
//       const char = A[i][j];
//       innerMap[char] = (innerMap[char] || 0) + 1;
//     }
//
//     map.forEach((value, key) => {
//       const repeated = innerMap[key];
//
//       if (repeated === undefined) {
//         map.delete(key);
//       } else {
//         map.set(key, Math.min(value, repeated));
//       }
//     });
//   }
//
//   map.forEach((value, key) => {
//     for (let i = 0; i < value; i += 1) {
//       common.push(key);
//     }
//   });
//
//   return common;
// };
