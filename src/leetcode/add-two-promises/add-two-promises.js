/**
 * Leetcode #2723
 * Difficulty: Easy
 * https://leetcode.com/problems/add-two-promises/
 * Algorithm: Promise
 */
/**
 * @param {Promise<number>} promise1
 * @param {Promise<number>} promise2
 * @return {Promise<number>}
 */
export const addTwoPromises = async (promise1, promise2) => {
  const [res1, res2] = await Promise.all([promise1, promise2]);
  return res1 + res2;
};
