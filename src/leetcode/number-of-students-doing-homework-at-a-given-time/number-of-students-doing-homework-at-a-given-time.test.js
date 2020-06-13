import { busyStudent } from './number-of-students-doing-homework-at-a-given-time';

describe('[Leetcode] busyStudent', () => {
  test('example #1', () => {
    expect(busyStudent([1, 2, 3], [3, 2, 7], 4)).toBe(1);
  });

  test('example #2', () => {
    expect(busyStudent([4], [4], 4)).toBe(1);
  });

  test('example #3', () => {
    expect(busyStudent([4], [4], 5)).toBe(0);
  });

  test('example #4', () => {
    expect(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7)).toBe(0);
  });

  test('example #5', () => {
    expect(
      busyStudent(
        [9, 8, 7, 6, 5, 4, 3, 2, 1],
        [10, 10, 10, 10, 10, 10, 10, 10, 10],
        5
      )
    ).toBe(5);
  });
});
