import { minPathSum } from './minimum-path-sum';

describe('[Leetcode] minPathSum', () => {
  test('example #1', () => {
    expect(
      minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
      ])
    ).toBe(7);
  });

  test('example #2', () => {
    expect(
      minPathSum([
        [1, 5, 5, 5],
        [5, 5, 5, 5],
        [5, 5, 5, 5],
        [5, 2, 5, 5]
      ])
    ).toBe(28);
  });

  test('example #3', () => {
    expect(
      minPathSum([
        [1, 2, 5],
        [3, 2, 1]
      ])
    ).toBe(6);
  });
});
