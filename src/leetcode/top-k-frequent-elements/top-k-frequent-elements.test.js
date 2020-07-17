import { topKFrequent } from './top-k-frequent-elements';

describe('[Leetcode] topKFrequent', () => {
  test('example #1', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test('example #2', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  test('example #3', () => {
    expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toEqual([2, -1]);
  });
});
