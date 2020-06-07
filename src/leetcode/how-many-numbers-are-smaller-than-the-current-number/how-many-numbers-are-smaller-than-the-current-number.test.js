import { smallerNumbersThanCurrent } from './how-many-numbers-are-smaller-than-the-current-number';

describe('[Leetcode] smallerNumbersThanCurrent', () => {
  test('example #1', () => {
    expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]);
  });

  test('example #2', () => {
    expect(smallerNumbersThanCurrent([6, 5, 4, 8])).toEqual([2, 1, 0, 3]);
  });

  test('example #3', () => {
    expect(smallerNumbersThanCurrent([7, 7, 7, 7])).toEqual([0, 0, 0, 0]);
  });
});
