/**
 * Leetcode #2062
 * Difficulty: Easy
 * https://leetcode.com/problems/count-vowel-substrings-of-a-string/
 */
/**
 * @param {string} word
 * @return {number}
 */
// export const countVowelSubstrings = word => {
//   const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//   let result = 0;
//
//   for (let i = 0; i < word.length; i += 1) {
//     let set = new Set();
//
//     for (let j = 0; j < vowels.size; j += 1) {
//       const char = word[i + j];
//
//       if (vowels.has(char)) {
//         set.add(char);
//       }
//     }
//
//     if (set.size === vowels.size) {
//       result += 1;
//     }
//   }
//
//   return result;
// };

export const countVowelSubstrings = word => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const set = new Set();
  let count = 0;

  for (let i = 0; i < word.length; i += 1) {
    set.clear();

    for (let j = 0; j + i < word.length && vowels.has(word[j + i]); j += 1) {
      set.add(word[i + j]);

      if (set.size === vowels.size) {
        count += 1;
      }
    }
  }

  return count;
};
