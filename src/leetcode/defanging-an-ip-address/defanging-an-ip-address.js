/**
 * Leetcode #1108
 * Difficulty: Easy
 * https://leetcode.com/problems/defanging-an-ip-address/
 */
/**
 * @param {string} address
 * @return {string}
 */
export const defangIPAddress = address => {
  let resultString = '';

  for (let i = 0; i < address.length; i++) {
    if (address[i] !== '.') {
      resultString += address[i];
    } else {
      resultString += '[.]';
    }
  }

  return resultString;
};
