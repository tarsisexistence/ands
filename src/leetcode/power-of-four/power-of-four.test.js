import { isPowerOfFour } from './power-of-four';

describe('[Leetcode] isPowerOfFour', () => {
  test('example #1', () => {
    expect(isPowerOfFour(16)).toBe(true);
  });

  test('example #2', () => {
    expect(isPowerOfFour(5)).toBe(false);
  });

  test('example #3', () => {
    expect(isPowerOfFour(1)).toBe(true);
  });

  test('example #4', () => {
    expect(isPowerOfFour(0)).toBe(false);
  });
});
