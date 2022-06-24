/**
 * Leetcode #1694
 * Difficulty: Easy
 * https://leetcode.com/problems/reformat-phone-number/
 */
/**
 * @param {string} number
 * @return {string}
 */

export const reformatNumber = number => {
  let nums = '';

  for (let i = 0; i < number.length; i += 1) {
    if (Number.isInteger(parseInt(number[i]))) {
      nums += number[i];
    }
  }

  function recursive(str) {
    if (str.length <= 3) {
      return str;
    }

    if (str.length === 4) {
      return str[0] + str[1] + '-' + str[2] + str[3];
    }

    return str.slice(0, 3) + '-' + reformatNumber(str.slice(3));
  }

  return recursive(nums);
};

// export const reformatNumber = number => {
//   const shouldSplit = number.length > 1 && number.length % 3 === 1;
//   const result = [];
//   let nums = '';
//
//   for (let i = 0; i < number.length; i += 1) {
//     if (Number.isInteger(parseInt(number[i]))) {
//       nums += number[i];
//     }
//   }
//
//   for (let i = 0; i < nums.length; i += 3) {
//     let str = '';
//
//     for (let j = 0; j < 3 && nums[i + j] !== undefined; j += 1) {
//       str += nums[i + j];
//     }
//
//     if (str.length === 1) {
//       const last = result[result.length - 1];
//       const lastChar = result[result.length - 1][2];
//       result[result.length - 1] = last.slice(0, 2);
//       str = lastChar + str;
//     }
//
//     result.push(str);
//   }
//
//   return result.join('-');
// };
