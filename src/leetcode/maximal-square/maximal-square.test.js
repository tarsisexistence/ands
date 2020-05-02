import { maximalSquare } from './maximal-square';

describe('[Leetcode] maximalSquare', () => {
  test('example #1', () => {
    expect(
      maximalSquare([
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0']
      ])
    ).toBe(4);
  });

  test('example #2', () => {
    expect(
      maximalSquare([
        ['1', '1', '1', '1', '1', '1', '1', '1'],
        ['1', '1', '1', '1', '1', '1', '1', '0'],
        ['1', '1', '1', '1', '1', '1', '1', '0'],
        ['1', '1', '1', '1', '1', '0', '0', '0'],
        ['0', '1', '1', '1', '1', '0', '0', '0']
      ])
    ).toBe(16);
  });

  test('example #3', () => {
    expect(maximalSquare([['1']])).toBe(1);
  });
});
