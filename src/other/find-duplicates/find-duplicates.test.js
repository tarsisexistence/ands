import { findDuplicates } from './find-duplicates';

describe('[Other] findDuplicates', () => {
  test('example #1', () => {
    expect(findDuplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20])).toEqual([3, 6, 7]);
  });
});
