import { minimumAverage } from './minimum-average-of-smallest-and-largest-elements';

describe('[Leetcode] minimumAverage', () => {
  test('example #1', () => {
    expect(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1])).toBe(5.5);
  });

  test('example #2', () => {
    expect(minimumAverage([1, 9, 8, 3, 10, 5])).toBe(5.5);
  });

  test('example #3', () => {
    expect(minimumAverage([1, 2, 3, 7, 8, 9])).toBe(5.0);
  });
});
