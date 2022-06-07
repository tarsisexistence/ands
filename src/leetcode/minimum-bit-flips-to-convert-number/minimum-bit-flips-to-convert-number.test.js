import { minBitFlips } from './minimum-bit-flips-to-convert-number';

describe('[Leetcode] minBitFlips', () => {
  test('example #1', () => {
    expect(minBitFlips(10, 7)).toBe(3);
  });

  test('example #2', () => {
    expect(minBitFlips(3, 4)).toBe(3);
  });
});
