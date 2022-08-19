import { slowestKey } from './slowest-key';

describe('[Leetcode] slowestKey', () => {
  test('example #1', () => {
    expect(slowestKey([9, 29, 49, 50], 'cbcd')).toBe('c');
  });

  test('example #2', () => {
    expect(slowestKey([12, 23, 36, 46, 62], 'spuda')).toBe('a');
  });

  test('example #3', () => {
    expect(slowestKey([1, 2], 'ba')).toBe('b');
  });
});
