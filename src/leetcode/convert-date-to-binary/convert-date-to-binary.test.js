import { convertDateToBinary } from './convert-date-to-binary';

describe('[Leetcode] convertDateToBinary', () => {
  test('example #1', () => {
    expect(convertDateToBinary('"2080-02-29"')).toBe('100000100000-10-11101');
  });

  test('example #2', () => {
    expect(convertDateToBinary('1900-01-01')).toBe('11101101100-1-1');
  });
});
