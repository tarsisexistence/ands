import { countBinarySubstrings } from './count-binary-substrings';

describe('[Leetcode] countBinarySubstrings', () => {
  test('example #1', () => {
    expect(countBinarySubstrings('00110011')).toBe(6);
  });

  test('example #2', () => {
    expect(countBinarySubstrings('10101')).toBe(4);
  });

  test('example #3', () => {
    expect(countBinarySubstrings('00100011')).toBe(4);
  });
});
