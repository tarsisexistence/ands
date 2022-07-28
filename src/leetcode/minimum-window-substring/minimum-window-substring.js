/**
 * Leetcode #76
 * Difficulty: Hard
 * https://leetcode.com/problems/minimum-window-substring/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = (s, t) => {
  const map = new Map();
  let res = [0, Infinity];
  let size = 0;
  let left = 0;

  for (let i = 0; i < t.length; i += 1) {
    map.set(t[i], (map.get(t[i]) ?? 0) + 1);
  }

  for (let i = 0; i < s.length; i += 1) {
    const prevValue = map.get(s[i]);

    if (prevValue !== undefined) {
      map.set(s[i], prevValue - 1);
    }

    if (prevValue === 1) {
      size += 1;
    }

    while (size === map.size) {
      const current = i - left;
      const prev = res[1] - res[0];

      if (current < prev) {
        res[0] = left;
        res[1] = i;
      }

      const prevLeftValue = map.get(s[left]);

      if (prevLeftValue !== undefined) {
        map.set(s[left], prevLeftValue + 1);
      }

      if (prevLeftValue === 0) {
        size -= 1;
      }

      left += 1;
    }
  }

  return res[1] === Infinity ? '' : s.slice(res[0], res[1] + 1);
};
