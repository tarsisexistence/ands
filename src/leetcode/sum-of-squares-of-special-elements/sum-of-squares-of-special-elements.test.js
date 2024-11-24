import { sumOfSquares } from './sum-of-squares-of-special-elements';

describe('[Leetcode] sumOfSquares', () => {
  test('example #1', () => {
    expect(sumOfSquares([1, 2, 3, 4])).toBe(21);
  });

  test('example #2', () => {
    expect(sumOfSquares([2, 7, 1, 19, 18, 3])).toBe(63);
  });
});
