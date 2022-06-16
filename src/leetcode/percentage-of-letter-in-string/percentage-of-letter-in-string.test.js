import { percentageLetter } from './percentage-of-letter-in-string';

describe('[Leetcode] percentageLetter', () => {
  test('example #1', () => {
    expect(percentageLetter('foobar', 'o')).toBe(33);
  });

  test('example #2', () => {
    expect(percentageLetter('jjjj', 'k')).toBe(0);
  });
});
