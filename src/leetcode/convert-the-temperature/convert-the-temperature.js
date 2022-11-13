/**
 * Leetcode #2469
 * Difficulty: Easy
 * https://leetcode.com/problems/convert-the-temperature
 */
/**
 * @param {number} celsius
 * @return {number[]}
 */
export const convertTemperature = celsius => [celsius + 273.15, celsius * 1.8 + 32];
