import { maximumWealth } from './richest-customer-wealth';

describe('[Leetcode] maximumWealth', () => {
  test('example #1', () => {
    expect(
      maximumWealth([
        [1, 2, 3],
        [3, 2, 1]
      ])
    ).toBe(6);
  });

  test('example #2', () => {
    expect(
      maximumWealth([
        [1, 5],
        [7, 3],
        [3, 5]
      ])
    ).toBe(10);
  });

  test('example #3', () => {
    expect(
      maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5]
      ])
    ).toBe(17);
  });
});
