import { minimumMoves } from './minimum-moves-to-convert-string';

describe('[Leetcode] minDiffInBST', () => {
  test('example #1', () => {
    expect(minimumMoves('XXX')).toBe(1);
  });

  test('example #2', () => {
    expect(minimumMoves('XXOX')).toBe(2);
  });

  test('example #3', () => {
    expect(minimumMoves('OOOO')).toBe(0);
  });
});
