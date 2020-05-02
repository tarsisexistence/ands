import { kidsWithCandies } from './kids-with-the-greatest-number-of-candies';

describe('[Leetcode] kidsWithCandies', () => {
  test('example #1', () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true
    ]);
  });

  test('example #2', () => {
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true,
      false,
      false,
      false,
      false
    ]);
  });

  test('example #3', () => {
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
  });
});
