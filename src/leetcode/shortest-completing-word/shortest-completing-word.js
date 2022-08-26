/**
 * Leetcode #748
 * Difficulty: Easy
 * https://leetcode.com/problems/shortest-completing-word/submissions/
 */
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
export const shortestCompletingWord = (licensePlate, words) => {
  const map = new Map();
  let chars = 0;

  for (let i = 0; i < licensePlate.length; i += 1) {
    const c = licensePlate[i].toLowerCase();

    if (c.charCodeAt() > 96) {
      map.set(c, (map.get(c) ?? 0) + 1);
      chars += 1;
    }
  }

  words.sort((a, b) => a.length - b.length);

  for (const word of words) {
    if (word.length < chars) {
      continue;
    }

    const localMap = new Map(map);

    for (let i = 0; i < word.length; i += 1) {
      const value = localMap.get(word[i]);

      if (value === undefined) {
        continue;
      }

      const nextValue = value - 1;

      if (nextValue === 0) {
        localMap.delete(word[i]);
      } else {
        localMap.set(word[i], nextValue);
      }
    }

    if (localMap.size === 0) {
      return word;
    }
  }
};
