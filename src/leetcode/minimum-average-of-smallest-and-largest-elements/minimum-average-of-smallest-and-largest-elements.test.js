import { minimumAverageOfSmallestAndLargestElements } from './minimum-average-of-smallest-and-largest-elements';

describe('[Leetcode] minimumAverageOfSmallestAndLargestElements', () => {
  test('example #1', () => {
    expect(minimumAverageOfSmallestAndLargestElements([3, 1, 2])).toBe(2);
  });

  test('example #2', () => {
    expect(minimumAverageOfSmallestAndLargestElements([5, 4, 1, 2, 3])).toBe(3);
  });

  test('example #3', () => {
    expect(minimumAverageOfSmallestAndLargestElements([1, 2, 3, 4])).toBe(2.5);
  });
});
