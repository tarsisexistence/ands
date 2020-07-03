/**
 * Leetcode #1185
 * Difficulty: Easy
 * https://leetcode.com/problems/day-of-the-week/
 */
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
export const dayOfTheWeek = (day, month, year) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const date = new Date(year, month - 1, day);
  const dayIndex = date.getDay();

  return days[dayIndex];
};
