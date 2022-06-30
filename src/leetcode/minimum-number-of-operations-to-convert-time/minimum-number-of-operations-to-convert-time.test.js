import { convertTime } from './minimum-number-of-operations-to-convert-time';

describe('[Leetcode] convertTime', () => {
  test('example #1', () => {
    expect(convertTime('02:30', '04:35')).toBe(3);
  });

  test('example #2', () => {
    expect(convertTime('11:00', '11:01')).toBe(1);
  });
});
