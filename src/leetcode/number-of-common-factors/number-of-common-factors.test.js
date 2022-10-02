import { commonFactors } from './number-of-common-factors';

describe('[Leetcode] commonFactors', () => {
  test('example #1', () => {
    expect(commonFactors(12, 6)).toBe(4);
  });

  test('example #2', () => {
    expect(commonFactors(25, 30)).toBe(2);
  });
});
