import { numOfStrings } from './number-of-strings-that-appear-as-substrings-in-word';

describe('[Leetcode] numOfStrings', () => {
  test('example #1', () => {
    expect(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc')).toBe(3);
  });

  test('example #2', () => {
    expect(numOfStrings(['a', 'b', 'c'], 'aaaaabbbbb')).toBe(2);
  });

  test('example #3', () => {
    expect(numOfStrings(['a', 'a', 'a'], 'ab')).toBe(3);
  });

  test('example #4', () => {
    expect(
      numOfStrings(
        [
          'dojsf',
          'v',
          'hetnovaoigv',
          'ksvqfdojsf',
          'hetnovaoig',
          'yskjs',
          'sfr',
          'msurztkvppptsluk',
          'ndxffbkkvejuakduhdcfsdbgbt',
          'znhdgtwzbnh',
          'h',
          'ocaualfiscmbpnfalypmtdppymw',
          'w',
          'o',
          'sfjksvqfdo',
          'odqvzuc',
          'bozawheajcmlewptgssueylcxhx',
          'bno',
          'jhmarzsphxduvdktzqjiz',
          'j',
          'sfrjhetnov',
          'vxv',
          'ksvqfd',
          'ognwvqtadalmav',
          'yqbspvfwmvhycmghabigl',
          'qyfaiazgdqaw',
          'ojsfrj',
          'ojsfrjhetn',
          'fdojs',
          'do',
          'ovaoig',
          'k',
          'vrh',
          'jsfrjhetnovaoigvgk'
        ],
        'csfjksvqfdojsfrjhetnovaoigvgk'
      )
    ).toBe(19);
  });

  test('example #5', () => {
    expect(numOfStrings(['j', 'jj'], 'j')).toBe(1);
  });

  test('example #6', () => {
    expect(numOfStrings(['j', 'jj'], 'jj')).toBe(2);
  });
});
