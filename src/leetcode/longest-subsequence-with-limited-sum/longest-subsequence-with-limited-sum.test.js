import { answerQueries } from './longest-subsequence-with-limited-sum';

describe('[Leetcode] longestNiceSubstring', () => {
  test('example #1', () => {
    expect(answerQueries([4, 5, 2, 1], [3, 10, 21])).toEqual([2, 3, 4]);
  });

  test('example #2', () => {
    expect(answerQueries([2, 3, 4, 5], [1])).toEqual([0]);
  });
});
