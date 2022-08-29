import { largestGoodInteger } from './largest-3-same-digit-number-in-string';

describe('[Leetcode] largestGoodInteger', () => {
  test('example #1', () => {
    expect(largestGoodInteger('6777133339')).toBe('777');
  });

  test('example #2', () => {
    expect(largestGoodInteger('2300019')).toBe('000');
  });

  test('example #3', () => {
    expect(largestGoodInteger('42352338')).toBe('');
  });
});
