import { checkZeroOnes } from './longer-contiguous-segments-of-ones-than-zeros';

describe('[Leetcode] checkZeroOnes', () => {
  test('example #1', () => {
    expect(checkZeroOnes('1101')).toBe(true);
  });

  test('example #2', () => {
    expect(checkZeroOnes('111000')).toBe(false);
  });

  test('example #3', () => {
    expect(checkZeroOnes('110100010')).toBe(false);
  });
});
