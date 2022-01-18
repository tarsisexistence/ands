import { maxDistance } from './two-furthest-houses-with-different-colors';

describe('[Leetcode] maxDistance', () => {
  test('example #1', () => {
    expect(maxDistance([1, 1, 1, 6, 1, 1, 1])).toBe(3);
  });

  test('example #2', () => {
    expect(maxDistance([1, 8, 3, 8, 3])).toBe(4);
  });

  test('example #3', () => {
    expect(maxDistance([0, 1])).toBe(1);
  });

  test('example #4', () => {
    expect(maxDistance([4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4])).toBe(8);
  });
});
