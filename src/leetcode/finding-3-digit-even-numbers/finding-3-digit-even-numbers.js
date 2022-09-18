/**
 * Leetcode #2094
 * Difficulty: Easy
 * https://leetcode.com/problems/finding-3-digit-even-numbers/
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
export const findEvenNumbers = digits => {
  const len = digits.length;
  const set = new Set();

  for (let i = 0; i < len; i += 1) {
    if (digits[i] === 0) {
      continue;
    }

    for (let j = 0; j < len; j += 1) {
      if (i === j) {
        continue;
      }

      for (let k = 0; k < len; k += 1) {
        if (k !== i && k !== j && digits[k] % 2 === 0) {
          const num = Number(`${digits[i]}${digits[j]}${digits[k]}`);
          set.add(num);
        }
      }
    }
  }

  return Array.from(set).sort((a, b) => a - b);
};
