import { toGoatLatin } from './goat-latin';

describe('[Leetcode] toGoatLatin', () => {
  test('example #1', () => {
    expect(toGoatLatin('I speak Goat Latin')).toBe('Imaa peaksmaaa oatGmaaaa atinLmaaaaa');
  });
  test('example #2', () => {
    expect(toGoatLatin('The quick brown fox jumped over the lazy dog')).toBe(
      'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa'
    );
  });

  test('example #3', () => {
    expect(toGoatLatin('Each word consists of lowercase and uppercase letters only')).toBe(
      'Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaa onlymaaaaaaaaaa'
    );
  });
});
