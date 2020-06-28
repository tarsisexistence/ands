import { createTree } from './createTree';
import { TreeNode } from '../../utils/node';

describe('[Other] createTree', () => {
  test('should return null', () => {
    expect(createTree([])).toBe(null);
  });

  test('should return root with single number', () => {
    expect(createTree([1])).toEqual(new TreeNode(1));
  });

  test('should return root with single char', () => {
    expect(createTree(['1'])).toEqual(new TreeNode('1'));
  });

  test('should return root with children', () => {
    expect(createTree([1, 2, 3])).toEqual(
      new TreeNode(1, new TreeNode(2), new TreeNode(3))
    );
  });

  test('should return tree with 2 levels of nesting', () => {
    expect(createTree([1, 2, 3, 4, 5, 6, 7])).toEqual(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, new TreeNode(6), new TreeNode(7))
      )
    );
  });

  test('should return tree with 2 levels of nesting with intermediate nulls', () => {
    expect(createTree([1, 2, 3, null, 5, 6])).toEqual(
      new TreeNode(
        1,
        new TreeNode(2, null, new TreeNode(5)),
        new TreeNode(3, new TreeNode(6))
      )
    );
  });

  test('should return tree with 3 levels of nesting', () => {
    expect(
      createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    ).toEqual(
      new TreeNode(
        1,
        new TreeNode(
          2,
          new TreeNode(4, new TreeNode(8), new TreeNode(9)),
          new TreeNode(5, new TreeNode(10), new TreeNode(11))
        ),
        new TreeNode(
          3,
          new TreeNode(6, new TreeNode(12), new TreeNode(13)),
          new TreeNode(7, new TreeNode(14), new TreeNode(15))
        )
      )
    );
  });

  test('should return tree with 3 levels of nesting with intermediate null', () => {
    expect(
      createTree([1, 2, 3, null, 5, 6, 7, 10, 11, 12, 13, 14, 15])
    ).toEqual(
      new TreeNode(
        1,
        new TreeNode(
          2,
          null,
          new TreeNode(5, new TreeNode(10), new TreeNode(11))
        ),
        new TreeNode(
          3,
          new TreeNode(6, new TreeNode(12), new TreeNode(13)),
          new TreeNode(7, new TreeNode(14), new TreeNode(15))
        )
      )
    );
  });
});
