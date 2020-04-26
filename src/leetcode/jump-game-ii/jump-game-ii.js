/**
 * Leetcode #45
 * Difficulty: Hard
 * https://leetcode.com/problems/jump-game-ii/
 *
 * While you go, maxDistance searches for maximum possible distance
 * by comparing each iteration. We do jump from the first time only over
 * the nums[i] units which is current maxDistance.
 * Next time we'll have aggregated maxDistance for the next jump.
 * Each time we reach equality between i and distance we count the jump iteration.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
export const jump = nums => {
  let distance = 0;
  let maxDistance = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i += 1) {
    maxDistance = Math.max(maxDistance, i + nums[i]);

    if (i === distance) {
      jumps += 1;
      distance = maxDistance;
    }
  }

  return jumps;
};
