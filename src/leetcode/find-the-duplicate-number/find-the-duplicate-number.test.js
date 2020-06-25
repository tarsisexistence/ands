import { findDuplicate } from './find-the-duplicate-number';

describe('[Leetcode] findDuplicate', () => {
  test('example #1', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });

  test('example #2', () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });

  test('example #3', () => {
    expect(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1])).toBe(9);
  });
});
