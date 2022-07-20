import { kthLargestNumber } from './find-the-kth-largest-integer-in-the-array';

describe('[Leetcode] kthLargestNumber', () => {
  test('example #1', () => {
    expect(kthLargestNumber(['3', '6', '7', '10'], 4)).toBe('3');
  });

  test('example #2', () => {
    expect(kthLargestNumber(['2', '21', '12', '1'], 3)).toBe('2');
  });

  test('example #3', () => {
    expect(kthLargestNumber(['0', '0'], 2)).toBe('0');
  });
});
