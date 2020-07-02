import { leafSimilar } from './leaf-similar-trees';
import { createTree } from '../../other/createTree/createTree';

describe('[Leetcode] leafSimilar', () => {
  test('example #1', () => {
    expect(
      leafSimilar(
        createTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
        createTree([
          3,
          5,
          1,
          6,
          7,
          4,
          2,
          null,
          null,
          null,
          null,
          null,
          null,
          9,
          8
        ])
      )
    ).toBeTruthy();
  });

  test('example #2', () => {
    expect(
      leafSimilar(
        createTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
        createTree([
          3,
          5,
          1,
          6,
          7,
          5,
          2,
          null,
          null,
          null,
          null,
          null,
          null,
          9,
          8
        ])
      )
    ).toBeFalsy();
  });
});
