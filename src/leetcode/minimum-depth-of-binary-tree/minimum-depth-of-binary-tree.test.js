import { minDepth } from './minimum-depth-of-binary-tree';
import { TreeNode } from '../../utils/node';

describe('[Leetcode] minDepth', () => {
  test('example #1', () => {
    expect(
      minDepth(
        new TreeNode(
          3,
          new TreeNode(9),
          new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
      )
    ).toBe(2);
  });

  test('example #2', () => {
    expect(
      minDepth(
        new TreeNode(
          3,
          new TreeNode(9, new TreeNode(10)),
          new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
      )
    ).toBe(3);
  });

  test('example #3', () => {
    expect(
      minDepth(
        new TreeNode(
          3,
          new TreeNode(9, new TreeNode(10)),
          new TreeNode(20, new TreeNode(15), new TreeNode(7, new TreeNode(25)))
        )
      )
    ).toBe(3);
  });
});
