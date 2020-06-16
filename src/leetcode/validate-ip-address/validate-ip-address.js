/**
 * Leetcode #468
 * Difficulty: Medium
 * https://leetcode.com/problems/validate-ip-address/
 */
/**
 * @param {string} IP
 * @return {string}
 */
export const validIPAddress = IP => {
  if (isIPv4(IP)) {
    return 'IPv4';
  } else if (isIPv6(IP)) {
    return 'IPv6';
  } else {
    return 'Neither';
  }
};

function isIPv4(ip) {
  const groups = ip.split('.');

  return (
    groups.length === 4 &&
    groups.every(group => {
      if (group.length === 0 || group.length > 4) {
        return false;
      } else if (group[0] === '0') {
        return group.length === 1;
      }

      for (let i = 0; i < group.length; i += 1) {
        const code = group[i];
        const isNumber = code >= 0 && code <= 9;

        if (!isNumber) {
          return false;
        }
      }

      return group > 0 && group <= 255;
    })
  );
}

function isIPv6(ip) {
  const groups = ip.split(':');
  return (
    groups.length === 8 &&
    groups.every(group => {
      if (
        group.length === 0 ||
        group.length > 4 ||
        Number.isNaN(Number(`0x${group}`))
      ) {
        return false;
      }

      for (let i = 0; i < group.length; i += 1) {
        const code = group[i];
        const isNumber = code >= 0 && code <= 9;
        const isUpperCase = code >= 'A' && code <= 'f';
        const isLowerCase = code >= 'a' && code <= 'f';

        if (!isNumber && !isUpperCase && !isLowerCase) {
          return false;
        }
      }

      return true;
    })
  );
}
