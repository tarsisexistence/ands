import { countKDifference } from './count-number-of-pairs-with-absolute-difference-k';

describe('[Leetcode] countKDifference', () => {
  test('example #1', () => {
    expect(countKDifference([1, 2, 2, 1], 1)).toBe(4);
  });

  test('example #2', () => {
    expect(countKDifference([1, 3], 3)).toBe(0);
  });

  test('example #3', () => {
    expect(countKDifference([3, 2, 1, 5, 4], 2)).toBe(3);
  });
});
