import { hIndex } from './h-index';

describe('[Leetcode] hIndex', () => {
  test('example #1', () => {
    expect(hIndex([0, 1, 3, 5, 6])).toBe(3);
  });

  test('example #2', () => {
    expect(hIndex([0, 1, 3, 4, 5, 6])).toBe(3);
  });

  test('example #3', () => {
    expect(hIndex([0, 1, 3, 4, 5, 6, 7])).toBe(4);
  });

  test('example #4', () => {
    expect(hIndex([])).toBe(0);
  });

  test('example #5', () => {
    expect(hIndex([5])).toBe(1);
  });

  test('example #6', () => {
    expect(hIndex([0, 1, 2, 3, 4])).toBe(2);
  });

  test('example #7', () => {
    expect(hIndex([0, 0, 0, 2, 4])).toBe(2);
  });

  test('example #8', () => {
    expect(hIndex([0, 0, 0, 1, 4])).toBe(1);
  });

  test('example #9', () => {
    expect(hIndex([5, 5, 5, 5, 5])).toBe(5);
  });

  test('example #10', () => {
    expect(hIndex([2, 2, 2, 2, 2])).toBe(2);
  });
});
