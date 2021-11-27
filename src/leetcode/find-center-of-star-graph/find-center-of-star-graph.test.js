import { findCenter } from './find-center-of-star-graph';

describe('[Leetcode] findCenter', () => {
  test('example #1', () => {
    expect(
      findCenter([
        [1, 2],
        [2, 3],
        [4, 2]
      ])
    ).toBe(2);
  });

  test('example #2', () => {
    expect(
      findCenter([
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4]
      ])
    ).toBe(1);
  });
});
