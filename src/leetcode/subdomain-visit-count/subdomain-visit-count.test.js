import { subdomainVisits } from './subdomain-visit-count';

describe('[Leetcode] subdomainVisits', () => {
  test('example #1', () => {
    expect(subdomainVisits(['9001 discuss.leetcode.com'])).toEqual([
      '9001 discuss.leetcode.com',
      '9001 leetcode.com',
      '9001 com'
    ]);
  });

  test('example #2', () => {
    expect(subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'])).toEqual([
      '900 google.mail.com',
      '901 mail.com',
      '951 com',
      '50 yahoo.com',
      '1 intel.mail.com',
      '5 wiki.org',
      '5 org'
    ]);
  });
});
