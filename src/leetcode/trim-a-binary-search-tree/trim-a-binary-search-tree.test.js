import { trimBST } from './trim-a-binary-search-tree';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] trimBST', () => {
  test('example #1', () => {
    expect(trimBST(createTree([1, 0, 2]), 1, 2)).toEqual(createTree([1, null, 2]));
  });

  test('example #2', () => {
    expect(trimBST(createTree([1, 4, 5]), 2, 6)).toEqual(createTree([5]));
  });

  test('example #3', () => {
    expect(trimBST(createTree([10, 4, 5]), 2, 6)).toEqual(createTree([4]));
  });

  test('example #4', () => {
    expect(trimBST(createTree([3, 0, 4, null, 2, null, null, 1]), 1, 3)).toEqual(createTree([3, 2, null, 1]));
  });
});
