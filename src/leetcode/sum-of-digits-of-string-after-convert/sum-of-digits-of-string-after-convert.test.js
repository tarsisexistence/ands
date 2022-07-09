import { getLucky } from './sum-of-digits-of-string-after-convert';

describe('[Leetcode] const', () => {
  test('example #1', () => {
    expect(getLucky('iiii', 1)).toBe(36);
  });

  test('example #2', () => {
    expect(getLucky('leetcode', 2)).toBe(6);
  });

  test('example #3', () => {
    expect(getLucky('zbax', 2)).toBe(8);
  });
});
