import { isThree } from './three-divisors';

describe('[Leetcode] isThree', () => {
  test('example #1', () => {
    expect(isThree(2)).toBe(false);
  });

  test('example #2', () => {
    expect(isThree(4)).toBe(true);
  });

  test('example #3', () => {
    expect(isThree(7)).toBe(false);
  });

  test('example #4', () => {
    expect(isThree(8)).toBe(false);
  });

  test('example #5', () => {
    expect(isThree(9)).toBe(true);
  });

  test('example #6', () => {
    expect(isThree(14)).toBe(false);
  });
});
