import { finalString } from './faulty-keyboard';

describe('[Leetcode] finalString', () => {
  test('example #1', () => {
    expect(finalString('string')).toBe('rtsng');
  });

  test('example #2', () => {
    expect(finalString('poiinter')).toBe('ponter');
  });
});
