/**
 * Leetcode #2129
 * Difficulty: Easy
 * https://leetcode.com/problems/capitalize-the-title/
 */
/**
 * @param {string} title
 * @return {string}
 */
export const capitalizeTitle = title => {
  const words = title.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const isLowerCase = word.length < 3;

    if (isLowerCase) {
      words[i] = word.toLowerCase();
      continue;
    }

    let cWord = word[0].toUpperCase();

    for (let j = 1; j < word.length; j += 1) {
      cWord += word[j].toLowerCase();
    }

    words[i] = cWord;
  }

  return words.join(' ');
};
