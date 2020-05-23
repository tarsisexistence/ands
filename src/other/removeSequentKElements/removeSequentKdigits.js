/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
export const removeSequentKdigits = (num, k) => {
  if (num.length <= k) {
    return '0';
  }

  let min = Number(num);
  const sum = Number(num);

  for (let i = 0; i < num.length - k; i += 1) {
    let remaining = '';
    let tap = '';

    for (let j = 0; j < num.length; j += 1) {
      if (j >= i && j < i + k) {
        tap += num[j];
      } else {
        remaining += num[j];
      }
    }
    min = Math.min(min, Number(remaining));
  }

  return String(min);
};
