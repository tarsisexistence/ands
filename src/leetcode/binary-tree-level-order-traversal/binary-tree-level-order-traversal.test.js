import { createTree } from '../../other/create-tree/create-tree';
import { levelOrder } from './binary-tree-level-order-traversal';

describe('[Leetcode] levelOrder', () => {
  test('example #1', () => {
    expect(levelOrder(createTree([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [9, 20], [15, 7]]);
  });

  test('example #2', () => {
    expect(levelOrder(createTree([3, 9, 20, null, null, 15, 7, 10]))).toEqual([[3], [9, 20], [15, 7], [10]]);
  });

  test('example #3', () => {
    expect(levelOrder(createTree([3, 9, 20, 6, 14, 15, 7, 10]))).toEqual([[3], [9, 20], [6, 14, 15, 7], [10]]);
  });

  test('example #4', () => {
    expect(levelOrder(createTree([3, 9, 20, 6, 14, 15, 7, 10, null, null, 2, 13, 19, null, 5]))).toEqual([
      [3],
      [9, 20],
      [6, 14, 15, 7],
      [10, 2, 13, 19, 5]
    ]);
  });
});
