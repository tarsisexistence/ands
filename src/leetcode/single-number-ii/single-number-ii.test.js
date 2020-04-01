import { singleNumber } from './single-number-ii';

describe('[Leetcode] singleNumber', () => {
  test('example #1', () => {
    expect(singleNumber([2, 2, 3, 2])).toBe(3);
  });

  test('example #2', () => {
    expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toBe(99);
  });
});
