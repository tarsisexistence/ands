/**
 * Leetcode #1189
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-number-of-balloons/
 */
/**
 * @param {string} text
 * @return {number}
 */
export const maxNumberOfBalloons = text => {
  const map = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  };

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (map[char] !== undefined) {
      map[char] += 1;
    }
  }

  return Object.keys(map).reduce((acc, char) => {
    let value = map[char];

    if (char === 'l' || char === 'o') {
      value = Math.floor(value / 2);
    }

    return Math.min(value, acc);
  }, map.b);
};
