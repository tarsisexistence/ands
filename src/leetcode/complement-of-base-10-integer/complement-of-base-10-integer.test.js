import { bitwiseComplement } from './complement-of-base-10-integer';

describe('[Leetcode] bitwiseComplement', () => {
  test('example #1', () => {
    expect(bitwiseComplement(5)).toBe(2);
  });

  test('example #2', () => {
    expect(bitwiseComplement(1)).toBe(0);
  });

  test('example #3', () => {
    expect(bitwiseComplement(7)).toBe(0);
  });

  test('example #4', () => {
    expect(bitwiseComplement(10)).toBe(5);
  });
});
