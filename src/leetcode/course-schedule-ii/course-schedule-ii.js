/**
 * Leetcode #210
 * Difficulty: Medium
 * https://leetcode.com/problems/course-schedule-ii/
 * Algorithm: Topological sort
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
export const findOrder = (numCourses, prerequisites) => {
  const graph = new Map();
  const indegree = new Array(numCourses).fill(0);
  const queue = [];
  const order = [];

  for (let i = 0; i < prerequisites.length; i += 1) {
    const [start, end] = prerequisites[i];

    if (!graph.has(end)) {
      graph.set(end, []);
    }

    graph.get(end).push(start);
    indegree[start] += 1;
  }

  for (let i = 0; i < indegree.length; i += 1) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const value = queue.shift();
    const deps = graph.get(value) || [];

    for (let i = 0; i < deps.length; i += 1) {
      const dep = deps[i];
      indegree[dep] -= 1;

      if (indegree[dep] === 0) {
        queue.push(dep);
      }
    }

    order.push(value);
  }

  return order.length === numCourses ? order : [];
};
