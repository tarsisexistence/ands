import { numJewelsInStones } from './jewels-and-stones';

describe('[OTHER] jewels and stones', () => {
  test('should return base leetcode result', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  });

  test('should return case sensitive result', () => {
    expect(numJewelsInStones('z', 'ZZ')).toBe(0);
  });

  test('should return basic leetcode result', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
  });

  test('should return 0 when no such types', () => {
    expect(numJewelsInStones('aAbB', 'cCdD')).toBe(0);
  });

  test('should return one type when there is only one appropriate equivalent', () => {
    expect(numJewelsInStones('aAbB', 'acCdD')).toBe(1);
  });

  test('should return appropriate amount of stones if there is equivalent stone', () => {
    expect(numJewelsInStones('aAbB', 'aAaa')).toBe(4);
  });
});
