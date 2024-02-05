import { numberOfLines } from './number-of-lines-to-write-string';

describe('[Leetcode] numberOfLines', () => {
  test('example #1', () => {
    expect(
      numberOfLines(
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        'abcdefghijklmnopqrstuvwxyz'
      )
    ).toEqual([3, 60]);
  });

  test('example #2', () => {
    expect(
      numberOfLines(
        [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        'bbbcccdddaaa'
      )
    ).toEqual([2, 4]);
  });
});
