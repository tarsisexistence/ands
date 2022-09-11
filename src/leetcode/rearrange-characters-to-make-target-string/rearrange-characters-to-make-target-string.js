/**
 * Leetcode #2287
 * Difficulty: Easy
 * https://leetcode.com/problems/rearrange-characters-to-make-target-string/
 */
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
export const rearrangeCharacters = (s, target) => {
  const sMap = new Map();
  const targetMap = new Map();
  let ans = Infinity;

  for (const c of target) {
    targetMap.set(c, (targetMap.get(c) ?? 0) + 1);
  }

  for (const c of s) {
    if (targetMap.has(c)) {
      sMap.set(c, (sMap.get(c) ?? 0) + 1);
    }
  }

  for (const key of targetMap.keys()) {
    const prevTarget = targetMap.get(key);
    const prevS = sMap.get(key) ?? 0;
    const diff = Math.floor(prevS / prevTarget);

    ans = Math.min(ans, diff);
  }

  return ans;
};
