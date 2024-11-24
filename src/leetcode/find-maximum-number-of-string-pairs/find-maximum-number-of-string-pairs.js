/**
 * Leetcode #2744
 * Difficulty: Easy
 * https://leetcode.com/problems/find-maximum-number-of-string-pairs
 */

/**
 * @param {string[]} words
 * @return {number}
 */
export const maximumNumberOfStringPairs = words => {
  const set = new Set();
  let count = 0;

  for (const word of words) {
    const rev = word.split('').reverse().join('');

    if (word === rev) {
      continue;
    }

    if (set.has(rev)) {
      count += 1;
      set.delete(rev);
    } else {
      set.add(word);
    }
  }

  return count;
};

/**
 * Alternative solution using initial Set with all words:
 *
 * const maximumNumberOfStringPairs = (words) => {
 *   const set = new Set(words);
 *   let count = 0;
 *
 *   for (const word of words) {
 *     const rev = word.split('').reverse().join('');
 *     if (set.has(rev) && word !== rev) {
 *       count += 1;
 *       set.delete(rev);
 *       set.delete(word);
 *     }
 *   }
 *
 *   return count;
 * };
 */
