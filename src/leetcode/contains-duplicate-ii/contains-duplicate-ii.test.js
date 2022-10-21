import { containsNearbyDuplicate } from './contains-duplicate-ii';

describe('[Leetcode] containsNearbyDuplicate', () => {
  test('example #1', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  test('example #2', () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });

  test('example #3', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });
});
