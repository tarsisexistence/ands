/**
 * Leetcode #804
 * Difficulty: Easy
 * https://leetcode.com/problems/unique-morse-code-words/
 */

const morseMap = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..'];
/**
 * @param {string[]} words
 * @return {number}
 */
export const uniqueMorseRepresentations = words => {
  const result = new Set();

  for (let word of words) {
    let wordResult = '';

    for (let i = 0; i < word.length; i += 1) {
      const charId = word.charCodeAt(i) - 97;
      wordResult += morseMap[charId];
    }

    result.add(wordResult);
  }

  return result.size;
};
