import { getConcatenation } from './concatenation-of-array';

describe('[Leetcode] getConcatenation', () => {
  test('example #1', () => {
    expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
  });

  test('example #2', () => {
    expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
