import { countStudents } from './number-of-students-unable-to-eat-lunch';

describe('[Leetcode] countStudents', () => {
  test('example #1', () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0);
  });

  test('example #2', () => {
    expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3);
  });

  test('example #3', () => {
    expect(countStudents([1, 1, 0, 0], [1, 1, 0, 0])).toBe(0);
  });
});
