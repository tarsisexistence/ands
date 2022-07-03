import { decodeMessage } from './decode-the-message';

describe('[Leetcode] decodeMessage', () => {
  test('example #1', () => {
    expect(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')).toBe('this is a secret');
  });

  test('example #2', () => {
    expect(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')).toBe(
      'the five boxing wizards jump quickly'
    );
  });
});
