/**
 * Leetcode #103
 * Difficulty: Medium
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const zigzagLevelOrder = root => {
  const order = [];
  dfs(root, 0);
  return order;

  function dfs(node, lvl) {
    if (node === null) {
      return;
    }

    if (order[lvl] === undefined) {
      order[lvl] = [];
    }

    if (lvl % 2 === 0) {
      order[lvl].push(node.val);
    } else {
      order[lvl].unshift(node.val);
    }

    dfs(node.left, lvl + 1);
    dfs(node.right, lvl + 1);
  }
};

// export const zigzagLevelOrder = root => {
//   const order = [];
//   dfs(root, 0);
//   return order.map((nums, i) => (i % 2 === 0 ? nums : nums.reverse()));
//
//   function dfs(node, lvl) {
//     if (node === null) {
//       return;
//     }
//
//     if (order[lvl] === undefined) {
//       order[lvl] = [];
//     }
//
//     order[lvl].push(node.val);
//     dfs(node.left, lvl + 1);
//     dfs(node.right, lvl + 1);
//   }
// };
