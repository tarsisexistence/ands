import { uniquePaths } from './unique-paths';

describe('[Leetcode] uniquePaths', () => {
  test('example #1', () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });

  test('example #2', () => {
    expect(uniquePaths(3, 3)).toBe(6);
  });

  test('example #3', () => {
    expect(uniquePaths(7, 3)).toBe(28);
  });

  test('example #4', () => {
    expect(uniquePaths(1, 1)).toBe(1);
  });

  test('example #5', () => {
    expect(uniquePaths(2, 1)).toBe(1);
  });

  test('example #6', () => {
    expect(uniquePaths(1, 2)).toBe(1);
  });

  test('example #7', () => {
    expect(uniquePaths(2, 2)).toBe(2);
  });
});
