import { findWords } from './keyboard-row';

describe('[Leetcode] findWords', () => {
  test('example #1', () => {
    expect(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])).toEqual([
      'Alaska',
      'Dad'
    ]);
  });

  test('example #2', () => {
    expect(findWords(['asdfghjkl', 'qwertyuiop', 'zxcvbnm'])).toEqual([
      'asdfghjkl',
      'qwertyuiop',
      'zxcvbnm'
    ]);
  });
});
