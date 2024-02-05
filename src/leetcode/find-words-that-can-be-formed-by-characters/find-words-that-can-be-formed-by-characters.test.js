import { countCharacters } from './find-words-that-can-be-formed-by-characters';

describe('[Leetcode] countCharacters', () => {
  test('example #1', () => {
    expect(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')).toBe(6);
  });

  test('example #2', () => {
    expect(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')).toBe(10);
  });

  test('example #3', () => {
    expect(
      countCharacters(
        [
          'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
          'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
          'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
          'boygirdlggnh',
          'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
          'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
          'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
          'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
          'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
          'oxgaskztzroxuntiwlfyufddl',
          'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
          'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
          'eeilfdaookieawrrbvtnqfzcricvhpiv',
          'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
          'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
          'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
          'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
          'teyygdmmyadppuopvqdodaczob',
          'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
          'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs'
        ],
        'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp'
      )
    ).toBe(0);
  });
});
