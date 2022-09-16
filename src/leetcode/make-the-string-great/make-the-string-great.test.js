import { makeGood } from './make-the-string-great';

describe('[Leetcode] makeGood', () => {
  test('example #1', () => {
    expect(makeGood('leEeetcode')).toBe('leetcode');
  });

  test('example #2', () => {
    expect(makeGood('abBAcC')).toBe('');
  });

  test('example #3', () => {
    expect(makeGood('s')).toBe('s');
  });

  test('example #4', () => {
    expect(makeGood('mC')).toBe('mC');
  });

  test('example #5', () => {
    expect(makeGood('Pp')).toBe('');
  });
});
