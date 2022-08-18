import { minSetSize } from './reduce-array-size-to-the-half';

describe('[Leetcode] minSetSize', () => {
  test('example #1', () => {
    expect(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])).toBe(2);
  });

  test('example #2', () => {
    expect(minSetSize([7, 7, 7, 7, 7, 7])).toBe(1);
  });
});
