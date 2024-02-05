import { maxDepth } from './maximum-depth-of-binary-tree';
import { TreeNode } from '../../utils/node';

describe('[Leetcode] maxDepth', () => {
  test('example #1', () => {
    expect(maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))))).toBe(3);
  });
});
