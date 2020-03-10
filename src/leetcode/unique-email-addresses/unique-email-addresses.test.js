import { numUniqueEmails } from './unique-email-addresses';

describe('[Leetcode] numUniqueEmails', () => {
  test('example #1', () => {
    expect(
      numUniqueEmails([
        'test.email+alex@leetcode.com',
        'test.e.mail+bob.cathy@leetcode.com',
        'testemail+david@lee.tcode.com'
      ])
    ).toBe(2);
  });
});
