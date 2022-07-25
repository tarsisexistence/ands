/**
 * Leetcode #278
 * Difficulty: Easy
 * https://leetcode.com/problems/first-bad-version/
 */
export const solution = isBadVersion => {
  function search(l, r) {
    const middle = Math.floor((l + r) / 2);
    const value = isBadVersion(middle + 1);

    if (value && l === middle) {
      return middle + 1;
    }

    return value ? search(l, middle) : search(middle + 1, r);
  }

  return n => search(0, n - 1);
};

// export const solution = isBadVersion => n => {
//   let left = 0;
//   let right = n;
//
//   while (right - left !== 1) {
//     const mid = Math.floor((left + right) / 2);
//     const isBad = isBadVersion(mid);
//
//     if (isBadVersion(mid)) {
//       right = mid;
//     } else {
//       left = mid;
//     }
//   }
//
//   return right;
// };
