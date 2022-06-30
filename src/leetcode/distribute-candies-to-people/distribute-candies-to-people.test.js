import { distributeCandies } from './distribute-candies-to-people';

describe('[Leetcode] distributeCandies', () => {
  test('example #1', () => {
    expect(distributeCandies(7, 4)).toEqual([1, 2, 3, 1]);
  });

  test('example #2', () => {
    expect(distributeCandies(10, 3)).toEqual([5, 2, 3]);
  });
});
