/**
 * Leetcode #1160
 * Difficulty: Easy
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
export const countCharacters = (words, chars) => {
  let count = 0;

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    let copy = chars;
    let shouldCount = true;

    for (let j = 0; j < word.length; j += 1) {
      const char = word[j];
      const has = copy.includes(char);

      if (!has) {
        shouldCount = false;
        break;
      }

      copy = copy.replace(char, '');
    }

    if (shouldCount) {
      count += word.length;
    }
  }

  return count;
};

// export const countCharacters = (words, chars) => {
//   const charsArr = chars.split('');
//   let count = 0;
//
//   for (let i = 0; i < words.length; i += 1) {
//     const charsCopy = [...charsArr];
//     const word = words[i];
//     let shouldCount = true;
//
//     for (let j = 0; j < word.length; j += 1) {
//       const char = word[j];
//       const charId = charsCopy.indexOf(char);
//
//       if (charId === -1) {
//         shouldCount = false;
//         break;
//       }
//
//       charsCopy.splice(charId, 1);
//     }
//
//     if (shouldCount) {
//       count += word.length;
//     }
//   }
//
//   return count;
// };
