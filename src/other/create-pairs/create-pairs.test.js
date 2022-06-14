import { createPairs } from './create-pairs';

describe('[Other] create-pairs', () => {
  test('should return empty array from zero entries', () => {
    expect(createPairs([])).toEqual([]);
  });

  test('should return empty array from single entry', () => {
    expect(createPairs([1])).toEqual([]);
  });

  test('should return single pair from 2 values', () => {
    expect(createPairs([1, 2])).toEqual([[1, 2]]);
  });

  test('should 3 pairs from 3 values', () => {
    expect(createPairs([1, 2, 3])).toEqual([
      [1, 2],
      [1, 3],
      [2, 3]
    ]);
  });
});
