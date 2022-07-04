/**
 * Leetcode #242
 * Difficulty: Easy
 * https://leetcode.com/problems/valid-anagram/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i += 1) {
    mapS.set(s[i], (mapS.get(s[i]) ?? 0) + 1);
    mapT.set(t[i], (mapT.get(t[i]) ?? 0) + 1);
  }

  if (mapS.size !== mapT.size) {
    return false;
  }

  for (const [keyS, countS] of mapS) {
    if (countS !== mapT.get(keyS)) {
      return false;
    }
  }

  return true;
};
