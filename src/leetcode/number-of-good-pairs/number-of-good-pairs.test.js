import { numIdenticalPairs } from './number-of-good-pairs';

describe('[Leetcode] numIdenticalPairs', () => {
  test('example #1', () => {
    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
  });

  test('example #2', () => {
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
  });

  test('example #3', () => {
    expect(numIdenticalPairs([1, 2, 3])).toBe(0);
  });
});
