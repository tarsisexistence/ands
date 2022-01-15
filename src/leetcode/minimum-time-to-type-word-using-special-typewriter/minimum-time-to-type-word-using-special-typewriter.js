/**
 * Leetcode #1974
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/
 */
/**
 * @param {string} word
 * @return {number}
 */
export const minTimeToType = word => {
  let ans = 0;
  const first = 'a'.charCodeAt();
  const last = 'z'.charCodeAt();

  const getMinTime = (current, next) => {
    const currentPos = current.charCodeAt();
    const nextPos = next.charCodeAt();
    const clockwise = Math.abs(nextPos - currentPos);
    // check how much we can cut  (25 - 25 + 1 to cross from start to end in the clockwise way)
    const counterClockwise = last - first - clockwise + 1;

    return Math.min(clockwise, counterClockwise);
  };

  for (let i = 0; i < word.length; i += 1) {
    ans += getMinTime(word[i - 1] ?? 'a', word[i]);
    ans += 1;
  }

  return ans;
};

// const minTimeToType = word => {
//   let ans = 0;
//   const first = 'a'.charCodeAt();
//   const last = 'z'.charCodeAt();
//
//   const getMinTime = (current, next) => {
//     const currentPos = current.charCodeAt();
//     const nextPos = next.charCodeAt();
//
//     const defaultWay = Math.abs(nextPos - currentPos);
//     const clockwiseWay = last - currentPos + (nextPos - first) + 1;
//     const counterClockwiseWay = last - nextPos + (currentPos - first) + 1;
//
//     return Math.min(defaultWay, counterClockwiseWay, clockwiseWay);
//   };
//
//   for (let i = 0; i < word.length; i += 1) {
//     const minTime = getMinTime(word[i - 1] ?? 'a', word[i]);
//
//     ans += minTime + 1;
//   }
//
//   return ans;
// };
