/**
 * Leetcode #1496
 * Difficulty: Easy
 * https://leetcode.com/problems/path-crossing
 */
/**
 * @param {string} path
 * @return {boolean}
 */
export const isPathCrossing = path => {
  const set = new Set();
  let x = 0;
  let y = 0;
  set.add(`${x}-${y}`);

  for (let i = 0; i < path.length; i += 1) {
    const c = path[i];

    switch (c) {
      case 'N':
        y += 1;
        break;
      case 'S':
        y -= 1;
        break;
      case 'E':
        x += 1;
        break;
      case 'W':
        x -= 1;
        break;
    }

    const template = `${x}-${y}`;

    if (set.has(template)) {
      return true;
    }

    set.add(template);
  }

  return false;
};
