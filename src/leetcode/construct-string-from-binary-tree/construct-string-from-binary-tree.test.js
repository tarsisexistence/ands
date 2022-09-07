import { tree2str } from './construct-string-from-binary-tree';
import { createTree } from '../../other/create-tree/create-tree';

describe('[Leetcode] tree2str', () => {
  test('example #1', () => {
    expect(tree2str(createTree([1, 2, 3, 4]))).toBe('1(2(4))(3)');
  });

  test('example #2', () => {
    expect(tree2str(createTree([1, 2, 3, null, 4]))).toBe('1(2()(4))(3)');
  });

  test('example #3', () => {
    expect(tree2str(createTree([1]))).toBe('1');
  });
});
