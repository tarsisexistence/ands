import { maxAscendingSum } from './maximum-ascending-subarray-sum';

describe('[Leetcode] maxAscendingSum', () => {
  test('example #1', () => {
    expect(maxAscendingSum([10, 20, 30, 5, 10, 50])).toBe(65);
  });

  test('example #2', () => {
    expect(maxAscendingSum([10, 20, 30, 40, 50])).toBe(150);
  });

  test('example #3', () => {
    expect(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])).toBe(33);
  });
});
