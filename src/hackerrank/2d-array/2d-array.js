/**
 * HackerRank: 2D Array - DS
 * Difficulty: Easy
 * https://www.hackerrank.com/challenges/2d-array/problem
 */

export function hourglassSum(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length - 2; i += 1) {
    for (let j = 0; j < arr[0].length - 2; j += 1) {
      const sum = getHourglassSum(i, j);
      max = Math.max(max, sum);
    }
  }

  return max;

  function getHourglassSum(i, j) {
    const high = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
    const middle = arr[i + 1][j + 1];
    const low = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
    return high + middle + low;
  }
}
