import { distributeCandies } from './distribute-candies';

describe('[Leetcode] distributeCandies', () => {
  test('example #1', () => {
    expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3);
  });

  test('example #2', () => {
    expect(distributeCandies([1, 1, 2, 3])).toBe(2);
  });

  test('example #3', () => {
    expect(distributeCandies([1, 1, 2, 3, 4, 5])).toBe(3);
  });

  test('example #4', () => {
    expect(distributeCandies([1, 1, 2, 2, 3, 3, 4, 5])).toBe(4);
  });

  test('example #5', () => {
    expect(distributeCandies([1, 1, 1, 1, 2, 2, 2, 3, 3, 3])).toBe(3);
  });

  test('example #6', () => {
    expect(distributeCandies([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4])).toBe(4);
  });

  test('example #7', () => {
    expect(distributeCandies([0, 0, 14, 0, 10, 0, 0, 0])).toBe(3);
  });
});
