/**
 * Leetcode #383
 * Difficulty: Easy
 * https://leetcode.com/problems/ransom-note/
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = (ransomNote, magazine) => {
  const details = new Map();

  for (let i = 0; i < magazine.length; i += 1) {
    details.set(magazine[i], (details.get(magazine[i]) ?? 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    const remaining = details.get(ransomNote[i]);

    if (!remaining) {
      return false;
    }

    details.set(ransomNote[i], remaining - 1);
  }

  return true;
};
