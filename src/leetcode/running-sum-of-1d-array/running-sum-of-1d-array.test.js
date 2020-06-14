import { runningSum } from './running-sum-of-1d-array';

describe('[Leetcode] runningSum', () => {
  test('example #1', () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  test('example #2', () => {
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('example #3', () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });
});
