/**
 * Leetcode #2299
 * Difficulty: Easy
 * https://leetcode.com/problems/strong-password-checker-ii/
 */
/**
 * @param {string} password
 * @return {boolean}
 */
const specialCharacters = new Set(['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']);

export const strongPasswordCheckerII = password => {
  let hasDigit = false;
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasSpecialChar = false;
  let hasMinLength = password.length >= 8;
  let containsAdjacent = false;

  for (let i = 0; i < password.length; i += 1) {
    const c = password[i];

    if (specialCharacters.has(c)) {
      hasSpecialChar = true;
    } else if (Number.isInteger(Number(c))) {
      hasDigit = true;
    } else if (c === c.toLowerCase()) {
      hasLowerCase = true;
    } else if (c === c.toUpperCase()) {
      hasUpperCase = true;
    }

    if (c === password[i + 1]) {
      containsAdjacent = true;
    }
  }

  return hasMinLength && hasLowerCase && hasUpperCase && hasDigit && hasSpecialChar && !containsAdjacent;
};
