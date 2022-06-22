import { divideString } from './divide-a-string-into-groups-of-size-k';

describe('[Leetcode] divideString', () => {
  test('example #1', () => {
    expect(divideString('abcdefghi', 3, 'x')).toEqual(['abc', 'def', 'ghi']);
  });

  test('example #2', () => {
    expect(divideString('abcdefghij', 3, 'x')).toEqual(['abc', 'def', 'ghi', 'jxx']);
  });
});
