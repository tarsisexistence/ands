import { numberOfPairs } from './maximum-number-of-pairs-in-array';

describe('[Leetcode] numberOfPairs', () => {
  test('example #1', () => {
    expect(numberOfPairs([1, 3, 2, 1, 3, 2, 2])).toEqual([3, 1]);
  });

  test('example #2', () => {
    expect(numberOfPairs([1, 1])).toEqual([1, 0]);
  });

  test('example #3', () => {
    expect(numberOfPairs([0])).toEqual([0, 1]);
  });
});
