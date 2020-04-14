/**
 * Leetcode #
 * Difficulty: -
 * -
 * Leetcode challenge problem
 */
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
export const stringShift = (s, shift) => {
  for (let i = 0; i < shift.length; i += 1) {
    const [direction, amount] = shift[i];
    const slice = direction === 0 ? s.slice(0, amount) : s.slice(-amount);
    const safe = direction === 0 ? s.slice(amount) : s.slice(0, -amount);
    s = direction === 0 ? safe + slice : slice + safe;
  }

  return s;
};
