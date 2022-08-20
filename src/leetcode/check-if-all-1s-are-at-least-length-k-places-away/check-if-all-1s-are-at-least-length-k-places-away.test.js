import { kLengthApart } from './check-if-all-1s-are-at-least-length-k-places-away';

describe('[Leetcode] kLengthApart', () => {
  test('example #1', () => {
    expect(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)).toBe(true);
  });

  test('example #2', () => {
    expect(kLengthApart([1, 0, 0, 1, 0, 1], 2)).toBe(false);
  });
});
