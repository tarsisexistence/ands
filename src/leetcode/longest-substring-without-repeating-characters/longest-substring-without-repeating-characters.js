/**
 * Leetcode #3
 * Difficulty: Medium
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Algorithm: Sliding window
 */
/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = s => {
  const set = new Set();
  let max = 0;

  for (let i = 0; i < s.length; i += 1) {
    while (set.has(s[i])) {
      set.delete(s[i - set.size]);
    }

    set.add(s[i]);
    max = Math.max(max, set.size);
  }

  return max;
};

// export const lengthOfLongestSubstring = s => {
//   const set = new Set();
//   let max = 0;
//
//   for (let i = 0; i < s.length; i += 1) {
//     if (set.has(s[i])) {
//       i -= set.size - 1; // return back and skip only first char of the sequence
//       set.clear();
//     }
//
//     set.add(s[i]);
//     max = Math.max(max, set.size);
//   }
//
//   return max;
// };

// export const lengthOfLongestSubstring = s => {
//   let maxLength = 0;
//   let subString = '';
//
//   for (let i = 0; i < s.length; i += 1) {
//     const index = subString.lastIndexOf(s[i]);
//     subString = index > -1 ? subString.slice(index + 1) + s[i] : subString + s[i];
//     maxLength = Math.max(subString.length, maxLength);
//   }
//
//   return maxLength;
// };
