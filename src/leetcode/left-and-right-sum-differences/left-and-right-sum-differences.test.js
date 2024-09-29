import { leftRightDifference } from './left-and-right-sum-differences';

describe('[Leetcode] leftRightDifference', () => {
  test('example #1', () => {
    expect(leftRightDifference([10, 4, 8, 3])).toEqual([15, 1, 11, 22]);
  });

  test('example #2', () => {
    expect(leftRightDifference([1])).toEqual([0]);
  });
});
