import { searchInsert } from './search-insert-position';

describe('[Leetcode] searchInsert', () => {
  test('example #1', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test('example #2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test('example #3', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  test('example #4', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  test('example #5', () => {
    expect(searchInsert([1, 3], 0)).toBe(0);
  });

  test('example #6', () => {
    expect(searchInsert([1, 3], 4)).toBe(2);
  });

  test('example #7', () => {
    expect(searchInsert([1, 3], 2)).toBe(1);
  });

  test('example #8', () => {
    expect(searchInsert([1, 3], 3)).toBe(1);
  });
});
