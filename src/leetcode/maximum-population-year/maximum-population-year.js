/**
 * Leetcode #1854
 * Difficulty: Easy
 * https://leetcode.com/problems/maximum-population-year
 */
/**
 * @param {number[][]} logs
 * @return {number}
 */
export const maximumPopulation = logs => {
  const population = logs.reduce((acc, [birth, death]) => {
    for (let i = birth; i < death; i += 1) {
      acc[i] = acc[i] === undefined ? 1 : acc[i] + 1;
    }

    return acc;
  }, {});

  const max = Object.keys(population)
    .sort((a, b) => population[b] - population[a])
    .at(0);

  return Number(max);
};
