import { largestInteger } from './largest-number-after-digit-swaps-by-parity';

describe('[Leetcode] largestInteger', () => {
  test('example #1', () => {
    expect(largestInteger(1234)).toBe(3412);
  });

  test('example #2', () => {
    expect(largestInteger(65875)).toBe(87655);
  });

  test('example #3', () => {
    expect(largestInteger(135)).toBe(531);
  });
});
