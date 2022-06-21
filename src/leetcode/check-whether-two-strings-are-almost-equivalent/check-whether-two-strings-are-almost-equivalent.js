/**
 * Leetcode #2068
 * Difficulty: Easy
 * https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
export const checkAlmostEquivalent = (word1, word2) => {
  const map = new Map();

  for (let i = 0; i < word1.length; i += 1) {
    map.set(word1[i], (map.get(word1[i]) ?? 0) + 1);
    map.set(word2[i], (map.get(word2[i]) ?? 0) - 1);
  }

  for (const char of map.keys()) {
    const count = map.get(char);

    if (Math.abs(count) > 3) {
      return false;
    }
  }

  return true;
};

// export const checkAlmostEquivalent = (word1, word2) => {
//   const map1 = new Map();
//   const map2 = new Map();
//
//   for (const char1 of word1) {
//     map1.set(char1, (map1.get(char1) ?? 0) + 1);
//   }
//   for (const char2 of word2) {
//     map2.set(char2, (map2.get(char2) ?? 0) + 1);
//   }
//
//   for (const char1 of map1.keys()) {
//     const count1 = map1.get(char1);
//     const count2 = map2.get(char1) ?? 0;
//
//     if (Math.abs(count1 - count2) > 3) {
//       return false;
//     }
//   }
//
//   for (const char2 of map2.keys()) {
//     const count2 = map2.get(char2);
//     const count1 = map1.get(char2) ?? 0;
//
//     if (Math.abs(count1 - count2) > 3) {
//       return false;
//     }
//   }
//
//   return true;
// };
