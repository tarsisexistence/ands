import { numSpecial } from './special-positions-in-a-binary-matrix';

describe('[Leetcode] numSpecial', () => {
  test('example #1', () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0]
      ])
    ).toBe(1);
  });

  test('example #2', () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ])
    ).toBe(3);
  });
});
