/**
 * Leetcode #2273
 * Difficulty: Easy
 * https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
export const removeAnagrams = words => {
  const alt = [];

  for (const word of words) {
    alt.push(
      word
        .split('')
        .sort((a, b) => a.charCodeAt() - b.charCodeAt())
        .join('')
    );
  }

  for (let i = 0; i < words.length; i += 1) {
    for (let j = i + 1; j < words.length; j += 1) {
      if (alt[i] === alt[j]) {
        words.splice(j, 1);
        alt.splice(j, 1);
        j -= 1;
      } else {
        break;
      }
    }
  }

  return words;
};
