import { search } from './binary-search';

describe('[Leetcode] search', () => {
  test('example #1', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test('example #2', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  test('example #3', () => {
    expect(search([-1, 0, 3, 5, 9, 12, 13], 9)).toBe(4);
  });

  test('example #4', () => {
    expect(search([4], 4)).toBe(0);
  });

  test('example #5', () => {
    expect(search([4, 5], 5)).toBe(1);
  });

  test('example #6', () => {
    expect(search([4, 5], 4)).toBe(0);
  });

  test('example #7', () => {
    expect(search([2, 5], 0)).toBe(-1);
  });
});
