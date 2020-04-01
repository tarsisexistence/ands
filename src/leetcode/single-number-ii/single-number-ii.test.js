import { singleNumber2 } from './single-number-ii';

describe('[Leetcode] singleNumber2', () => {
  test('example #1', () => {
    expect(singleNumber2([2, 2, 3, 2])).toBe(3);
  });

  test('example #2', () => {
    expect(singleNumber2([0, 1, 0, 1, 0, 1, 99])).toBe(99);
  });
});
