import { sumOddLengthSubarrays } from './sum-of-all-odd-length-subarrays';

describe('[Leetcode] sumEvenAfterQueries', () => {
  test('example #1', () => {
    expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toBe(58);
  });

  test('example #2', () => {
    expect(sumOddLengthSubarrays([1, 2])).toBe(3);
  });

  test('example #3', () => {
    expect(sumOddLengthSubarrays([10, 11, 12])).toBe(66);
  });
});
