/**
 * Leetcode #1773
 * Difficulty: Easy
 * https://leetcode.com/problems/count-items-matching-a-rule/submissions/
 */
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
export const countMatches = (items, ruleKey, ruleValue) =>
  items.reduce((acc, item) => {
    if (ruleKey === 'type' && item[0] === ruleValue) {
      return acc + 1;
    } else if (ruleKey === 'color' && item[1] === ruleValue) {
      return acc + 1;
    } else if (ruleKey === 'name' && item[2] === ruleValue) {
      return acc + 1;
    }

    return acc;
  }, 0);

// const countMatches = (items, ruleKey, ruleValue) =>  {
//   const map = {
//     type: 0,
//     color: 1,
//     name: 2
//   }
//
//   return items.reduce((acc, item) => item[map[ruleKey]] === ruleValue ? acc + 1 : acc, 0);
// }

// export const countMatches = (items, ruleKey, ruleValue) => {
//   let count = 0;
//
//   for (const item of items) {
//     if (ruleKey === 'type' && item[0] === ruleValue) {
//       count += 1;
//     } else if (ruleKey === 'color' && item[1] === ruleValue) {
//       count += 1;
//     } else if (ruleKey === 'name' && item[2] === ruleValue) {
//       count += 1;
//     }
//   }
//
//   return count;
// };
