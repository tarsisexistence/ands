/**
 * Leetcode #332
 * Difficulty: Medium
 * https://leetcode.com/problems/reconstruct-itinerary/
 */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
export const findItinerary = tickets => {
  const map = {};
  const result = [];

  for (let i = 0; i < tickets.length; i += 1) {
    const [from, to] = tickets[i];

    if (map[from] === undefined) {
      map[from] = [to];
    } else {
      map[from].push(to);
    }
  }

  for (let from in map) {
    map[from].sort((a, b) => (a < b ? 1 : -1));
  }

  dfs('JFK');

  return result.reverse();

  function dfs(node) {
    const des = map[node];

    while (des !== undefined && des.length > 0) {
      dfs(des.pop());
    }

    result.push(node);
  }
};
