import { intersection } from './intersection-of-multiple-arrays';

describe('[Leetcode] intersection', () => {
  test('example #1', () => {
    expect(
      intersection([
        [3, 1, 2, 4, 5],
        [1, 2, 3, 4],
        [3, 4, 5, 6]
      ])
    ).toEqual([3, 4]);
  });

  test('example #2', () => {
    expect(
      intersection([
        [1, 2, 3],
        [4, 5, 6]
      ])
    ).toEqual([]);
  });
});
