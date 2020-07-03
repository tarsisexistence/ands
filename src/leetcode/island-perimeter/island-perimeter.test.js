import { islandPerimeter } from './island-perimeter';

describe('[Leetcode] islandPerimeter', () => {
  test('example #1', () => {
    expect(
      islandPerimeter([
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]
      ])
    ).toBe(16);
  });
});
