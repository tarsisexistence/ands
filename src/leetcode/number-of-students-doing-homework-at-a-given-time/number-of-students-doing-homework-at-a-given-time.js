/**
 * Leetcode #1450
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
 */
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
export const busyStudent = (startTime, endTime, queryTime) =>
  startTime.filter((start, i) => start <= queryTime && queryTime <= endTime[i])
    .length;
