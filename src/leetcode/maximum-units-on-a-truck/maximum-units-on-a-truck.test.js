import { maximumUnits } from './maximum-units-on-a-truck';

describe('[Leetcode] maximumUnits', () => {
  test('example #1', () => {
    expect(
      maximumUnits(
        [
          [1, 3],
          [2, 2],
          [3, 1]
        ],
        4
      )
    ).toBe(8);
  });

  test('example #2', () => {
    expect(
      maximumUnits(
        [
          [5, 10],
          [2, 5],
          [4, 7],
          [3, 9]
        ],
        10
      )
    ).toBe(91);
  });
});
