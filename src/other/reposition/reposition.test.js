import { reposition } from './reposition';

describe('[Other] reposition', () => {
  test('should return the same when the original array is in the same order', () => {
    const array = ['a', 'b', 'c', 'd'];
    reposition(array, [0, 1, 2, 3]);

    expect(array).toEqual(['a', 'b', 'c', 'd']);
  });

  test('should re-order by index', () => {
    const array = ['a', 'b', 'c', 'd'];
    reposition(array, [1, 2, 3, 0]);

    expect(array).toEqual(['d', 'a', 'b', 'c']);
  });
});
