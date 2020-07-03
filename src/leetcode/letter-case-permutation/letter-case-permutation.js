/**
 * Leetcode #784
 * Difficulty: Easy
 * https://leetcode.com/problems/letter-case-permutation/
 */
/**
 * @param {string} S
 * @return {string[]}
 */
export const letterCasePermutation = S => {
  const words = [S];

  for (let i = 0; i < S.length; i += 1) {
    const char = S[i];
    const charCode = char.charCodeAt(0);
    const isUpper = charCode >= 65 && charCode <= 90;
    const isLower = charCode >= 97 && charCode <= 122;

    if (!isUpper && !isLower) {
      continue;
    }

    const transformedChar = isUpper ? char.toLowerCase() : char.toUpperCase();
    const { length } = words;

    for (let j = 0; j < length; j += 1) {
      const word =
        words[j].substring(0, i) + transformedChar + words[j].substring(i + 1);
      words.push(word);
    }
  }

  return words;
};

// export const letterCasePermutation = S => {
//   const words = [S.split('')];
//
//   for (let i = 0; i < S.length; i += 1) {
//     const char = S[i];
//     const charCode = char.charCodeAt(0);
//     const isUpper = charCode >= 65 && charCode <= 90;
//     const isLower = charCode >= 97 && charCode <= 122;
//
//     if (!isUpper && !isLower) {
//       continue;
//     }
//
//     const transformedChar = isUpper ? char.toLowerCase() : char.toUpperCase();
//     const { length } = words;
//
//     for (let j = 0; j < length; j += 1) {
//       const letters = words[j].slice();
//       letters[i] = transformedChar;
//       words.push(letters);
//     }
//   }
//
//   return words.map(letters => letters.join(''));
// };
