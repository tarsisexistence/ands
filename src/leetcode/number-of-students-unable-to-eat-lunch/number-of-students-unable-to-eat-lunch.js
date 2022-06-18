/**
 * Leetcode #1700
 * Difficulty: Easy
 * https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 */
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
export const countStudents = (students, sandwiches) => {
  let canEat = true;

  while (canEat && students.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      continue;
    }

    canEat = students.some(s => s === sandwiches[0]);

    if (canEat) {
      const student = students.shift();
      students.push(student);
    }
  }

  return students.length;
};
