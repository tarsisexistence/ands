import { levelOrderBottom } from './binary-tree-level-order-traversal-ii';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] levelOrderBottom', () => {
  test('example #1', () => {
    expect(levelOrderBottom(createTree([3, 9, 20, null, null, 15, 7]))).toEqual([[15, 7], [9, 20], [3]]);
  });

  test('example #2', () => {
    expect(levelOrderBottom(createTree([3, 9, 20, null, null, 15, 7, 10]))).toEqual([[10], [15, 7], [9, 20], [3]]);
  });
});
