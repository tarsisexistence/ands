import { createTree } from '../../other/create-tree/create-tree';
import { getTargetCopy } from './find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree';

describe('[Leetcode] getTargetCopy', () => {
  test('example #1', () => {
    expect(
      getTargetCopy(createTree([7, 4, 3, null, null, 6, 19]), createTree([7, 4, 3, null, null, 6, 19]), createTree([3]))
    ).toEqual(createTree([3, 6, 19]));
  });

  test('example #2', () => {
    expect(getTargetCopy(createTree([7]), createTree([7]), createTree([7]))).toEqual(createTree([7]));
  });
});
