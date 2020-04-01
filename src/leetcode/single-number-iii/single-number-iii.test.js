import { singleNumber } from './single-number-iii';

describe('[Leetcode] singleNumber', () => {
  test('example #1', () => {
    expect(singleNumber([1, 2, 1, 3, 2, 5])).toEqual([3, 5]);
  });
});
