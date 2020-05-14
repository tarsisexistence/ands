import { reverseString } from './reverse-string';

describe('[Leetcode] reverseString', () => {
  test('example #1', () => {
    const arr = ['h', 'e', 'l', 'l', 'o'];
    reverseString(arr);
    const reversed = ['o', 'l', 'l', 'e', 'h'];
    expect(arr).toEqual(reversed);
  });

  test('example #2', () => {
    const arr = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(arr);
    const reversed = ['h', 'a', 'n', 'n', 'a', 'H'];
    expect(arr).toEqual(reversed);
  });
});
