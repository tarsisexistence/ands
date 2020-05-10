/**
 * Leetcode #997
 * Difficulty: Easy
 * https://leetcode.com/problems/find-the-town-judge/
 */
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
export const findJudge = (N, trust) => {
  const people = new Array(N + 1).fill(0);

  for (let i = 0; i < trust.length; i += 1) {
    const [a, b] = trust[i];
    people[a] -= 1;
    people[b] += 1;
  }

  for (let i = 1; i < people.length; i += 1) {
    if (people[i] === N - 1) {
      return i;
    }
  }

  return -1;
};

// export const findJudge = (N, trust) => {
//   const people = new Array(N).fill(0);
//
//   for (let i = 0; i < trust.length; i += 1) {
//     const [a, b] = trust[i];
//     people[a - 1] -= 1;
//     people[b - 1] += 1;
//   }
//
//   for (let i = 0; i < people.length; i += 1) {
//     if (people[i] === N - 1) {
//       return i + 1;
//     }
//   }
//
//   return -1
// };
