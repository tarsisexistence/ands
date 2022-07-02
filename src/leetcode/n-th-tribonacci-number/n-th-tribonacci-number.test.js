import { tribonacci } from './n-th-tribonacci-number';

describe('[Leetcode] tribonacci', () => {
  test('example #1', () => {
    expect(tribonacci(4)).toBe(4);
  });

  test('example #2', () => {
    expect(tribonacci(25)).toBe(1389537);
  });
});
