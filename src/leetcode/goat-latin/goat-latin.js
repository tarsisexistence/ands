/**
 * Leetcode #824
 * Difficulty: Easy
 * https://leetcode.com/problems/goat-latin/
 */
/**
 * @param {string} S
 * @return {string}
 */
export const toGoatLatin = S => {
  const vowel = new Set(['a', 'e', 'i', 'o', 'u']);

  return S.split(' ')
    .map((word, i) => {
      const end = 'ma' + 'a'.repeat(i + 1);
      return vowel.has(word[0].toLowerCase()) ? word + end : word.slice(1) + word[0] + end;
    })
    .join(' ');
};
