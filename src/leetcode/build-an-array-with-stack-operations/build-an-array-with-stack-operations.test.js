import { buildArray } from './build-an-array-with-stack-operations';

describe('[Leetcode] buildArray', () => {
  test('example #1', () => {
    expect(buildArray([1, 3], 3)).toEqual(['Push', 'Push', 'Pop', 'Push']);
  });

  test('example #2', () => {
    expect(buildArray([1, 2, 3], 3)).toEqual(['Push', 'Push', 'Push']);
  });

  test('example #3', () => {
    expect(buildArray([1, 2], 4)).toEqual(['Push', 'Push']);
  });

  test('example #4', () => {
    expect(buildArray([2, 3, 4], 4)).toEqual([
      'Push',
      'Pop',
      'Push',
      'Push',
      'Push'
    ]);
  });
});
