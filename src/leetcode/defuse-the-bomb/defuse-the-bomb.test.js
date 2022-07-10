import { decrypt } from './defuse-the-bomb';

describe('[Leetcode] decrypt', () => {
  test('example #1', () => {
    expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
  });

  test('example #2', () => {
    expect(decrypt([1, 2, 3, 4], 0)).toEqual([0, 0, 0, 0]);
  });

  test('example #3', () => {
    expect(decrypt([2, 4, 9, 3], -2)).toEqual([12, 5, 6, 13]);
  });
});
