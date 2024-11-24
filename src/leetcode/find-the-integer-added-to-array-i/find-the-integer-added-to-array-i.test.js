import { addedInteger } from './find-the-integer-added-to-array-i';

describe('[Leetcode] addedInteger', () => {
  test('example #1', () => {
    expect(addedInteger([2, 6, 4], [9, 7, 5])).toBe(3);
  });

  test('example #2', () => {
    expect(addedInteger([10], [5])).toBe(-5);
  });

  test('example #3', () => {
    expect(addedInteger([1, 1, 1, 1], [1, 1, 1, 1])).toBe(0);
  });
});
