import { countGoodSubstrings } from './substrings-of-size-three-with-distinct-characters';

describe('[Leetcode] countGoodSubstrings', () => {
  test('example #1', () => {
    expect(countGoodSubstrings('xyzzaz')).toBe(1);
  });

  test('example #2', () => {
    expect(countGoodSubstrings('aababcabc')).toBe(4);
  });

  test('example #3', () => {
    expect(countGoodSubstrings('xyz')).toBe(1);
  });

  test('example #4', () => {
    expect(countGoodSubstrings('xyx')).toBe(0);
  });
});
