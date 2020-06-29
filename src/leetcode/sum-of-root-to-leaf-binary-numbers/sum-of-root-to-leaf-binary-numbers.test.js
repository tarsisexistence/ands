import { sumRootToLeaf } from './sum-of-root-to-leaf-binary-numbers';
import { createTree } from '../../other/createTree/createTree';

describe('[Leetcode] sumRootToLeaf', () => {
  test('example #1', () => {
    expect(sumRootToLeaf(createTree([1, 0, 1, 0, 1, 0, 1]))).toBe(22);
  });

  test('example #2', () => {
    expect(sumRootToLeaf(createTree([1, 1]))).toBe(3);
  });
});
