import { createTree } from '../../other/create-tree/create-tree';
import { isSymmetric } from './symmetric-tree';

describe('[Leetcode] isSymmetric', () => {
  test('example #1', () => {
    expect(isSymmetric(createTree([1, 2, 2, 3, 4, 4, 3]))).toBe(true);
  });

  test('example #2', () => {
    expect(isSymmetric(createTree([1, 2, 2, null, 3, null, 3]))).toBe(false);
  });
});
