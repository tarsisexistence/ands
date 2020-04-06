/**
 * Leetcode #49
 * Difficulty: Easy
 * https://leetcode.com/problems/group-anagrams/
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = strs => {
  const map = new Map();

  for (let i = 0; i < strs.length; i += 1) {
    const str = strs[i];
    const anagram = str
      .split('')
      .sort()
      .join('');

    if (map.has(anagram)) {
      map.get(anagram).push(str);
    } else {
      map.set(anagram, [str]);
    }
  }

  return [...map.values()];
};
