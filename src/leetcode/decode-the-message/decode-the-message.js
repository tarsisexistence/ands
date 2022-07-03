/**
 * Leetcode #2325
 * Difficulty: Easy
 * https://leetcode.com/problems/decode-the-message/
 */
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
export const decodeMessage = (key, message) => {
  const firstCharCode = 'a'.charCodeAt(0); // 97
  const map = new Map();
  const uniques = [];
  let result = '';

  for (let i = 0; i < key.length; i += 1) {
    if (key[i] !== ' ' && !map.has(key[i])) {
      map.set(key[i], '');
      uniques.push(key[i]);
    }
  }

  for (let i = 0; i < uniques.length; i += 1) {
    const code = uniques[i].charCodeAt();
    map.set(uniques[i], String.fromCharCode(i + firstCharCode));
  }

  for (let i = 0; i < message.length; i += 1) {
    result += map.get(message[i]) ?? ' ';
  }

  return result;
};
