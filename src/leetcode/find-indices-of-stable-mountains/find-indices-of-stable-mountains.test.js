import { stableMountains } from './find-indices-of-stable-mountains';

describe('[Leetcode] stableMountains', () => {
  test('example #1', () => {
    expect(stableMountains([1, 2, 3, 4, 5], 2)).toEqual([3, 4]);
  });

  test('example #2', () => {
    expect(stableMountains([10, 1, 10, 1, 10], 3)).toEqual([1, 3]);
  });
});
