import { decompressRLElist } from './decompress-run-length-encoded-list';

describe('[Leetcode] decompressRLElist', () => {
  test('example #1', () => {
    expect(decompressRLElist([1, 2, 3, 4])).toEqual([2, 4, 4, 4]);
  });

  test('example #2', () => {
    expect(decompressRLElist([1, 1, 2, 3])).toEqual([1, 3, 3]);
  });
});
