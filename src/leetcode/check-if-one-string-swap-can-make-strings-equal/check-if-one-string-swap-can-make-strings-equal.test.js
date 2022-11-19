import { areAlmostEqual } from './check-if-one-string-swap-can-make-strings-equal';

describe('[Leetcode] areAlmostEqual', () => {
  test('example #1', () => {
    expect(areAlmostEqual('bank', 'kanb')).toBe(true);
  });

  test('example #2', () => {
    expect(areAlmostEqual('attack', 'defend')).toBe(false);
  });

  test('example #3', () => {
    expect(areAlmostEqual('kelb', 'kelb')).toBe(true);
  });

  test('example #4', () => {
    expect(areAlmostEqual('"caa"', 'aaz')).toBe(false);
  });

  test('example #5', () => {
    expect(areAlmostEqual('bankb', 'kannb')).toBe(false);
  });

  test('example #6', () => {
    expect(
      areAlmostEqual(
        'eyapgosevqecyuobikhcpztfrrnuibtpjekygfssnqihtmlnevrwqosktoozmefq',
        'iexryyjgmazbxegpxxipzoybexebydjwxgarqiysoqexgvelhlbpotlfbnogbvpg'
      )
    ).toBe(false);
  });
});
