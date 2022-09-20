import { getMinimumDifference } from './minimum-absolute-difference-in-bst';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] getMinimumDifference', () => {
  test('example #1', () => {
    expect(getMinimumDifference(createTree([4, 2, 6, 1, 3]))).toBe(1);
  });

  test('example #2', () => {
    expect(getMinimumDifference(createTree([1, 0, 48, null, null, 12, 49]))).toBe(1);
  });

  test('example #3', () => {
    expect(getMinimumDifference(createTree([10, 5, 48, null, null, 12, 59]))).toBe(2);
  });
});
