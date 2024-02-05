import { countNodes } from './count-complete-tree-nodes';
import { TreeNode } from '../../utils/node';

describe('[Leetcode] countNodes', () => {
  test('example #1', () => {
    expect(
      countNodes(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6))))
    ).toBe(6);
  });

  test('example #2', () => {
    expect(countNodes(null)).toBe(0);
  });

  test('example #3', () => {
    expect(countNodes(new TreeNode(10))).toBe(1);
  });
});
