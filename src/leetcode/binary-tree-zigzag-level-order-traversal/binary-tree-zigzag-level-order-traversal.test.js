import { createTree } from '../../other/create-tree/create-tree';
import { zigzagLevelOrder } from './binary-tree-zigzag-level-order-traversal';

describe('[Leetcode] zigzagLevelOrder', () => {
  test('example #1', () => {
    expect(zigzagLevelOrder(createTree([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [20, 9], [15, 7]]);
  });

  test('example #2', () => {
    expect(zigzagLevelOrder(createTree([3, 9, 20, null, null, 15, 7, 10]))).toEqual([[3], [20, 9], [15, 7], [10]]);
  });

  test('example #3', () => {
    expect(zigzagLevelOrder(createTree([3, 9, 20, 6, 14, 15, 7, 10]))).toEqual([[3], [20, 9], [6, 14, 15, 7], [10]]);
  });

  test('example #4', () => {
    expect(zigzagLevelOrder(createTree([3, 9, 20, 6, 14, 15, 7, 10, null, null, 2, 13, 19, null, 5]))).toEqual([
      [3],
      [20, 9],
      [6, 14, 15, 7],
      [5, 19, 13, 2, 10]
    ]);
  });
});
