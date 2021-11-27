/**
 * Leetcode #2037
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
 */
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
export const minMovesToSeat = (seats, students) => {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let ans = 0;

  for (let i = 0; i < seats.length; i += 1) {
    ans += Math.abs(seats[i] - students[i]);
  }

  return ans;
};
