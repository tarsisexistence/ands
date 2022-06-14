import { createSubsets } from './create-subsets';

describe('[Other] create-subsets', () => {
  test('should return single subset of zero numbers', () => {
    expect(createSubsets([])).toEqual([[]]);
  });

  test('should return two subsets from single value', () => {
    expect(createSubsets([1])).toEqual([[], [1]]);
  });

  test('should return subsets from 2 entries', () => {
    expect(createSubsets([1, 2])).toEqual([[], [1], [2], [1, 2]]);
  });

  test('should return subsets from 3 entries', () => {
    expect(createSubsets([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
  });
});
