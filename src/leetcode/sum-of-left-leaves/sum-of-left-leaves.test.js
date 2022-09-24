import { sumOfLeftLeaves } from './sum-of-left-leaves';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] sumOfLeftLeaves', () => {
  test('example #1', () => {
    expect(sumOfLeftLeaves(createTree([3, 9, 20, null, null, 15, 7]))).toBe(24);
  });

  test('example #2', () => {
    expect(sumOfLeftLeaves(createTree([1]))).toBe(0);
  });
});
