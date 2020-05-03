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
  const noteMap = new Map();

  for (let i = 0; i < ransomNote.length; i += 1) {
    const char = ransomNote[i];
    const quantity = noteMap.get(char);
    noteMap.set(char, 1 + (quantity || 0));
  }

  for (let i = 0; i < magazine.length; i += 1) {
    const char = magazine[i];
    const remaining = (noteMap.get(char) || 0) - 1;

    if (remaining > 0) {
      noteMap.set(char, remaining);
    } else {
      noteMap.delete(char);
    }
  }

  return noteMap.size === 0;
};
