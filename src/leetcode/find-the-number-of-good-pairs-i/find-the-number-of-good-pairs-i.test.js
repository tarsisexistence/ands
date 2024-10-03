import { numberOfPairs } from './find-the-number-of-good-pairs-i';

describe('[Leetcode] numberOfPairs', () => {
  test('example #1', () => {
    expect(numberOfPairs([1, 3, 4], [1, 3, 4], 1)).toBe(5);
  });

  test('example #2', () => {
    expect(numberOfPairs([1, 2, 4, 12], [2, 4], 3)).toBe(2);
  });
});
