import { minimumSum } from './minimum-sum-of-four-digit-number-after-splitting-digits';

describe('[Leetcode] minimumSum', () => {
  test('example #1', () => {
    expect(minimumSum(2932)).toBe(52);
  });

  test('example #2', () => {
    expect(minimumSum(4009)).toBe(13);
  });
});
