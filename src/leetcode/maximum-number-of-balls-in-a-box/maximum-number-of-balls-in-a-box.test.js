import { countBalls } from './maximum-number-of-balls-in-a-box';

describe('[Leetcode] countBalls', () => {
  test('example #1', () => {
    expect(countBalls(1, 10)).toBe(2);
  });

  test('example #2', () => {
    expect(countBalls(5, 15)).toBe(2);
  });

  test('example #3', () => {
    expect(countBalls(19, 28)).toBe(2);
  });
});
