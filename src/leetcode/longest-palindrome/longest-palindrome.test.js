import { longestPalindrome } from './longest-palindrome';

describe('[Leetcode] longestPalindrome', () => {
  test('example #1', () => {
    expect(longestPalindrome('abccccdd')).toBe(7);
  });

  test('example #2', () => {
    expect(longestPalindrome('a')).toBe(1);
  });

  test('example #3', () => {
    expect(longestPalindrome('bccaccdd')).toBe(7);
  });

  test('example #4', () => {
    expect(longestPalindrome('ccc')).toBe(3);
  });

  test('example #5', () => {
    expect(longestPalindrome('acccd')).toBe(3);
  });

  test('example #6', () => {
    expect(longestPalindrome('aacccd')).toBe(5);
  });

  test('example #7', () => {
    expect(
      longestPalindrome(
        'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
      )
    ).toBe(983);
  });
});
