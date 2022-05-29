/**
 * Leetcode #1379
 * Difficulty: Easy
 * https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 */
export const getTargetCopy = (original, cloned, target) => {
  if (!original || !cloned) {
    return null;
  }

  if (original.val === target.val && cloned.val === target.val) {
    return cloned;
  }

  return (
    getTargetCopy(original.left, cloned.left, target) ?? getTargetCopy(original.right, cloned.right, target) ?? null
  );
};
