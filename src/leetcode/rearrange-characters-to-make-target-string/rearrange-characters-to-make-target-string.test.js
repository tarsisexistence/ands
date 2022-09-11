import { rearrangeCharacters } from './rearrange-characters-to-make-target-string';

describe('[Leetcode] rearrangeCharacters', () => {
  test('example #1', () => {
    expect(rearrangeCharacters('ilovecodingonleetcode', 'code')).toBe(2);
  });

  test('example #2', () => {
    expect(rearrangeCharacters('abcba', 'abc')).toBe(1);
  });

  test('example #3', () => {
    expect(rearrangeCharacters('abbaccaddaeea', 'aaaaa')).toBe(1);
  });

  test('example #4', () => {
    expect(
      rearrangeCharacters(
        'lrnvlcqukanpdnluowenfxquitzryponxsikhciohyostvmkapkfpglzikitwiraqgchxnpryhwpuwpozacjhmwhjvslprqlnxrk',
        'woijih'
      )
    ).toBe(2);
  });
});
