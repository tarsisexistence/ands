import { minimumAverage } from './minimum-average';

describe('[Leetcode] minimumAverage', () => {
  test('example #1', () => {
    expect(minimumAverage([3, 1, 2])).toBe(2);
  });

  test('example #2', () => {
    expect(minimumAverage([5, 4, 1, 2, 3])).toBe(3);
  });

  test('example #3', () => {
    expect(minimumAverage([1, 2, 3, 4])).toBe(2.5);
  });
});
