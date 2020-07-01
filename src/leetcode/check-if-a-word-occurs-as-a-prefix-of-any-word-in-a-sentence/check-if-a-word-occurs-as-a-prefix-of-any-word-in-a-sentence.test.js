import { isPrefixOfWord } from './check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence';

describe('[Leetcode] isPrefixOfWord', () => {
  test('example #1', () => {
    expect(isPrefixOfWord('i love eating burger', 'burg')).toBe(4);
  });

  test('example #2', () => {
    expect(isPrefixOfWord('this problem is an easy problem', 'pro')).toBe(2);
  });

  test('example #3', () => {
    expect(isPrefixOfWord('i am tired', 'you')).toBe(-1);
  });

  test('example #4', () => {
    expect(isPrefixOfWord('i use triple pillow', 'pill')).toBe(4);
  });

  test('example #5', () => {
    expect(isPrefixOfWord('hello from the other side', 'they')).toBe(-1);
  });
});
