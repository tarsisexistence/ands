import { reposition } from './reposition';

describe('[Other] reposition', () => {
  test('example #1', () => {
    const array = ['a', 'b', 'c', 'd'];
    reposition(array, [1, 2, 3, 0]);

    expect(array).toEqual(['d', 'a', 'b', 'c']);
  });

  test('example #2', () => {
    const array = ['a', 'b', 'c', 'd'];
    reposition(array, [0, 1, 2, 3]);

    expect(array).toEqual(['a', 'b', 'c', 'd']);
  });
});
