import { findComplement } from './number-complement';

describe('[Leetcode] findComplement', () => {
  test('example #1', () => {
    expect(findComplement(5)).toBe(2);
  });

  test('example #2', () => {
    expect(findComplement(1)).toBe(0);
  });

  test('example #3', () => {
    expect(findComplement(7)).toBe(0);
  });

  test('example #4', () => {
    expect(findComplement(10)).toBe(5);
  });
});
