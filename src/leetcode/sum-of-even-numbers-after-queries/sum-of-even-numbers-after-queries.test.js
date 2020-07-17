import { sumEvenAfterQueries } from './sum-of-even-numbers-after-queries';

describe('[Leetcode] sumEvenAfterQueries', () => {
  test('example #1', () => {
    expect(
      sumEvenAfterQueries(
        [1, 2, 3, 4],
        [
          [1, 0],
          [-3, 1],
          [-4, 0],
          [2, 3]
        ]
      )
    ).toEqual([8, 6, 2, 4]);
  });
});
