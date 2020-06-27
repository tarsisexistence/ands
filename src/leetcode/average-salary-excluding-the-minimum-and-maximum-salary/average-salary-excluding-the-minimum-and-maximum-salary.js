/**
 * Leetcode #1491
 * Difficulty: Easy
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 */
/**
 * @param {number[]} salary
 * @return {number}
 */
export const average = salary => {
  let sumWithoutBoundaries = 0;
  let max = salary[0];
  let min = salary[0];

  for (let i = 0; i < salary.length; i += 1) {
    const value = salary[i];

    if (value < min) {
      min = value;
    } else if (value > max) {
      max = value;
    }
  }

  for (let i = 0; i < salary.length; i += 1) {
    const value = salary[i];

    if (value !== max && value !== min) {
      sumWithoutBoundaries += value;
    }
  }

  return sumWithoutBoundaries / (salary.length - 2);
};
