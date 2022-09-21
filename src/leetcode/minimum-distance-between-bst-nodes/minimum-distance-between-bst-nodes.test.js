import { createTree } from '../../other/create-tree/create-tree';
import { minDiffInBST } from './minimum-distance-between-bst-nodes';

describe('[Leetcode] minDiffInBST', () => {
  test('example #1', () => {
    expect(minDiffInBST(createTree([4, 2, 6, 1, 3]))).toBe(1);
  });

  test('example #2', () => {
    expect(minDiffInBST(createTree([1, 0, 48, null, null, 12, 49]))).toBe(1);
  });

  test('example #3', () => {
    expect(minDiffInBST(createTree([10, 5, 48, null, null, 12, 59]))).toBe(2);
  });
});
