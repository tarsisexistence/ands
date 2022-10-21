import { flatten } from './flatten';

describe('[Other] flatten', () => {
  test('should return the same when array is flattened', () => {
    expect(flatten([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should flatten 2-levels array', () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  test('should flatten 3-levels array', () => {
    expect(flatten([1, [2, 3], 4, [[5, 6], 7]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
