/**
 * Leetcode #1455
 * Difficulty: Easy
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 */
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
export const isPrefixOfWord = (sentence, searchWord) => {
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].startsWith(searchWord)) {
      return i + 1;
    }
  }

  return -1;
};

// export const isPrefixOfWord = (sentence, searchWord) => {
//   const index = sentence.split(' ').findIndex(word => word.startsWith(searchWord));
//   return index === -1 ? index : index + 1;
// };
