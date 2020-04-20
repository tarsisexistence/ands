import { search } from './search-in-rotated-sorted-array';

describe('[Leetcode] search', () => {
  test('example #1', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  test('example #2', () => {
    expect(search([2, 3, 4], 2)).toBe(0);
  });

  test('example #3', () => {
    expect(search([3, 1], 1)).toBe(1);
  });

  test('example #4', () => {
    expect(search([1], 0)).toBe(-1);
  });

  test('example #5', () => {
    expect(search([1], 1)).toBe(0);
  });

  test('example #6', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });
});
