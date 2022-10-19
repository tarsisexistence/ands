import { topKFrequent } from './top-k-frequent-word';

describe('[Leetcode] topKFrequent', () => {
  test('example #1', () => {
    expect(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2)).toEqual(['i', 'love']);
  });

  test('example #2', () => {
    expect(topKFrequent(['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4)).toEqual([
      'the',
      'is',
      'sunny',
      'day'
    ]);
  });
});
