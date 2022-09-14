import { divisorSubstrings } from './find-the-k-beauty-of-a-number';

describe('[Leetcode] divisorSubstrings', () => {
  test('example #1', () => {
    expect(divisorSubstrings(240, 2)).toBe(2);
  });

  test('example #2', () => {
    expect(divisorSubstrings(430043, 2)).toBe(2);
  });
});
