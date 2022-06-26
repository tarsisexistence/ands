import { checkXMatrix } from './check-if-matrix-is-x-matrix';

describe('[Leetcode] checkXMatrix 2', () => {
  test('example #1', () => {
    expect(
      checkXMatrix([
        [2, 0, 0, 1],
        [0, 3, 1, 0],
        [0, 5, 2, 0],
        [4, 0, 0, 2]
      ])
    ).toBe(true);
  });

  test('example #2', () => {
    expect(
      checkXMatrix([
        [5, 7, 0],
        [0, 3, 1],
        [0, 5, 0]
      ])
    ).toBe(false);
  });
});
