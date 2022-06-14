/**
 * Leetcode #2185
 * Difficulty: Easy
 * https://leetcode.com/problems/counting-words-with-a-given-prefix/
 */
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
export const prefixCount = (words, pref) => {
  let count = 0;

  for (const word of words) {
    let isOk = true;

    for (let j = 0; j < pref.length; j += 1) {
      if (word[j] !== pref[j]) {
        isOk = false;
        break;
      }
    }

    if (isOk) {
      count += 1;
    }
  }

  return count;
};

// export const prefixCount = (words, pref) => words.filter(word => word.slice(0, pref.length) === pref).length;
