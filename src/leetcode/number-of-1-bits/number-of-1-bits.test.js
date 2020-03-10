import { hammingWeight } from './number-of-1-bits';

describe('[Leetcode] hammingWeight', () => {
  test('example #1', () => {
    expect(hammingWeight(11)).toBe(3);
  });

  test('example #2', () => {
    expect(hammingWeight(128)).toBe(1);
  });

  test('example #3', () => {
    expect(hammingWeight(4294967293)).toBe(31);
  });
});
