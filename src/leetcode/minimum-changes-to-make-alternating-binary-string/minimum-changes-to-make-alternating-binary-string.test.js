import { minOperations } from './minimum-changes-to-make-alternating-binary-string';

describe('[Leetcode] minOperations', () => {
  test('example #1', () => {
    expect(minOperations('0100')).toBe(1);
  });

  test('example #2', () => {
    expect(minOperations('10')).toBe(0);
  });

  test('example #3', () => {
    expect(minOperations('1111')).toBe(2);
  });

  test('example #4', () => {
    expect(minOperations('10010100')).toBe(3);
  });
});
