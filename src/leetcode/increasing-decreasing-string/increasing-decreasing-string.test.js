import { sortString } from './increasing-decreasing-string';

describe('[Leetcode] sortString', () => {
  test('example #1', () => {
    expect(sortString('aaaabbbbcccc')).toBe('abccbaabccba');
  });

  test('example #2', () => {
    expect(sortString('rat')).toBe('art');
  });

  test('example #3', () => {
    expect(sortString('leetcode')).toBe('cdelotee');
  });

  test('example #4', () => {
    expect(sortString('ggggggg')).toBe('ggggggg');
  });

  test('example #5', () => {
    expect(sortString('spo')).toBe('ops');
  });
});
