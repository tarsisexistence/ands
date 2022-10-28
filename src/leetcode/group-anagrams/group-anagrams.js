/**
 * Leetcode #49
 * Difficulty: Easy
 * https://leetcode.com/problems/group-anagrams/
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = strs => {
  const map = new Map();

  for (let i = 0; i < strs.length; i += 1) {
    const str = strs[i];
    const anagram = str.split('').sort().join('');

    if (map.has(anagram)) {
      map.get(anagram).push(str);
    } else {
      map.set(anagram, [str]);
    }
  }

  return [...map.values()];
};

// const groupAnagrams = strs => {
//   const res = [];
//   const joins = [];
//
//   for (let i = 0; i < strs.length; i += 1) {
//     const words = strs[i].split('').sort().join('');
//     joins.push(words);
//   }
//
//   for (let i = 0; i < strs.length; i += 1) {
//     if (joins[i] === null) {
//       continue;
//     }
//
//     const arr = [strs[i]];
//
//     for (let j = i + 1; j < strs.length; j += 1) {
//       if (joins[i] !== null && joins[i] === joins[j]) {
//         arr.push(strs[j]);
//         joins[j] = null;
//       }
//     }
//
//     joins[i] === null;
//     res.push(arr);
//   }
//
//   return res;
// };
