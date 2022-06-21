import { createTree } from '../../other/create-tree/create-tree';
import { deepestLeavesSum } from './deepest-leaves-sum';

describe('[Leetcode] deepestLeavesSum', () => {
  test('example #1', () => {
    expect(deepestLeavesSum(createTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]))).toBe(15);
  });

  test('example #2', () => {
    expect(deepestLeavesSum(createTree([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5]))).toBe(19);
  });
});
