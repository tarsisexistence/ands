import { numSquares } from './perfect-squares';

describe('[Leetcode] numSquares', () => {
  test('example #1', () => {
    expect(numSquares(12)).toBe(3);
  });

  test('example #2', () => {
    expect(numSquares(13)).toBe(2);
  });

  test('example #3', () => {
    expect(numSquares(14)).toBe(3);
  });

  test('example #4', () => {
    expect(numSquares(15)).toBe(4);
  });

  test('example #5', () => {
    expect(numSquares(8)).toBe(2);
  });

  test('example #6', () => {
    expect(numSquares(0)).toBe(0);
  });

  test('example #7', () => {
    expect(numSquares(19)).toBe(3);
  });
});
