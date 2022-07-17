import { specialArray } from './special-array-with-x-elements-greater-than-or-equal-x';

describe('[Leetcode] specialArray', () => {
  test('example #1', () => {
    expect(specialArray([3, 5])).toBe(2);
  });

  test('example #2', () => {
    expect(specialArray([0, 0])).toBe(-1);
  });

  test('example #3', () => {
    expect(specialArray([0, 4, 3, 0, 4])).toBe(3);
  });

  test('example #4', () => {
    expect(specialArray([2, 3, 4, 5])).toBe(3);
  });

  test('example #5', () => {
    expect(specialArray([2, 3, 4, 4, 5])).toBe(-1);
  });
});
