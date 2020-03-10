/**
 * Leetcode #929
 * Difficulty: Easy
 * https://leetcode.com/problems/unique-email-addresses/
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
export const numUniqueEmails = emails => {
  const nonUniqueEmails = emails.map(email => {
    const [local, domain] = email.split('@');
    let finite = '';

    for (let i = 0; i < local.length; i += 1) {
      const char = local[i];
      if (char === '+') {
        break;
      } else if (char !== '.') {
        finite += char;
      }
    }

    return `${finite}@${domain}`;
  });

  return new Set(nonUniqueEmails).size;
};
