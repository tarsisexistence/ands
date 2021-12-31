/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
export const removeSequentKDigits = (num, k) => {
  if (num.length <= k) {
    return '0';
  }

  let min = Number(num);

  for (let i = 0; i < num.length - k; i += 1) {
    let remaining = '';

    for (let j = 0; j < num.length; j += 1) {
      if (j >= i && j < i + k) {
        continue;
      }

      remaining += num[j];
    }

    min = Math.min(min, Number(remaining));
  }

  return String(min);
};
