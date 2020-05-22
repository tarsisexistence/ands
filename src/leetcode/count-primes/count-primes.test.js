import { countPrimes } from './count-primes';

describe('[Leetcode] countPrimes', () => {
  test('example #1', () => {
    expect(countPrimes(2)).toBe(0);
  });

  test('example #2', () => {
    expect(countPrimes(3)).toBe(1);
  });

  test('example #3', () => {
    expect(countPrimes(4)).toBe(2);
  });

  test('example #4', () => {
    expect(countPrimes(5)).toBe(2);
  });

  test('example #5', () => {
    expect(countPrimes(6)).toBe(3);
  });

  test('example #6', () => {
    expect(countPrimes(7)).toBe(3);
  });

  test('example #7', () => {
    expect(countPrimes(8)).toBe(4);
  });

  test('example #8', () => {
    expect(countPrimes(16)).toBe(6);
  });

  test('example #9', () => {
    expect(countPrimes(499979)).toBe(41537);
  });
});
