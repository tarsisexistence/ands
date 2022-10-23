import { findErrorNums } from './set-mismatch';

describe('[Leetcode] selfDividingNumbers', () => {
  test('example #1', () => {
    expect(findErrorNums([1, 2, 2, 4])).toEqual([2, 3]);
  });

  test('example #2', () => {
    expect(findErrorNums([1, 1])).toEqual([1, 2]);
  });
});
