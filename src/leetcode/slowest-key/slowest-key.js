/**
 * Leetcode #1629
 * Difficulty: Easy
 * https://leetcode.com/problems/slowest-key/
 */
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
export const slowestKey = (releaseTimes, keysPressed) => {
  let slowest = -Infinity;
  let key = keysPressed[0];

  for (let i = 0; i < releaseTimes.length; i += 1) {
    const diff = releaseTimes[i] - (releaseTimes[i - 1] ?? 0);
    if (slowest < diff) {
      slowest = diff;
      key = keysPressed[i];
    } else if (slowest === diff && key < keysPressed[i]) {
      key = keysPressed[i];
    }
  }

  return key;
};
