import { maximumOddBinaryNumber } from './maximum-odd-binary-number';

describe('[Leetcode] maximumOddBinaryNumber', () => {
  test('example #1', () => {
    expect(maximumOddBinaryNumber('010')).toBe('001');
  });

  test('example #2', () => {
    expect(maximumOddBinaryNumber('0101')).toBe('1001');
  });
});
