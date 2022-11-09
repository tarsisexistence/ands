import { rle } from './run-length-encoding';

describe('[Other] rle', () => {
  test('example #1', () => {
    expect(rle('ABB')).toBe('AB2');
  });

  test('example #2', () => {
    expect(rle('AABBBCCXYZ')).toBe('A2B3C2XYZ');
  });

  test('example #3', () => {
    expect(rle('AABBCCCAD')).toBe('A2B2C3AD');
  });

  test('example #4', () => {
    expect(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B21');
  });

  test('example #5', () => {
    expect(rle('A')).toBe('A');
  });
});
