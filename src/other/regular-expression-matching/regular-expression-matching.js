/**
 * Leetcode #10
 * https://leetcode.com/problems/regular-expression-matching/
 */
/**
 * @param {string} string
 * @param {string} pattern
 * @return {boolean}
 */
const isMatch = (string, pattern) => {
  // early return when pattern is empty
  if (!pattern) {
    // returns true when string and pattern are empty
    // returns false when string contains chars with empty pattern
    return !string;
  }

  // check the pattern directly if string has chars.
  const hasFirstCharMatch = Boolean(string) && (pattern[0] === '.' || pattern[0] === string[0]);

  // track when the next character * is next in line in the pattern
  if (pattern.length > 1 && pattern[1] === '*') {
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
    // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
    // If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char.
    return (
        isMatch(string, pattern.slice(2)) ||
        (hasFirstCharMatch && isMatch(string.slice(1), pattern))
    );
  }

  // now we know for sure that we need to do 2 simple actions
  // check the current pattern and string chars
  // if hasFirstCharMatch is true, then can proceed with next string and pattern chars (s+1, p+1)
  return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};
