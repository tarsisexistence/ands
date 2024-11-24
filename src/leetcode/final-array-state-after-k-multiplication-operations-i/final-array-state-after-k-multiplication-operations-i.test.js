import { getFinalState } from './final-array-state-after-k-multiplication-operations-i';

describe('[Leetcode] getFinalState', () => {
  test('example #1', () => {
    expect(getFinalState([2,1,3,5,6], 5, 2)).toEqual([8,4,6,5,6]);
  });

  test('example #2', () => {
    expect(getFinalState([1,2], 3, 4)).toEqual([16, 8]);
  });
});
