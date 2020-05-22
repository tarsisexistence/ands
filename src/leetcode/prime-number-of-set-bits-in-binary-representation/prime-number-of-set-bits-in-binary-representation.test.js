import { countPrimeSetBits } from './prime-number-of-set-bits-in-binary-representation';

describe('[Leetcode] countPrimeSetBits', () => {
  test('example #1', () => {
    expect(countPrimeSetBits(6, 10)).toBe(4);
  });

  test('example #2', () => {
    expect(countPrimeSetBits(10, 15)).toBe(5);
  });

  test('example #3', () => {
    expect(countPrimeSetBits(842, 888)).toBe(23);
  });
});
