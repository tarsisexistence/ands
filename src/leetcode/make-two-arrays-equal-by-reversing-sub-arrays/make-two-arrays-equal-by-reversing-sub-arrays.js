/**
 * Leetcode #1460
 * Difficulty: Easy
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 */
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
export const canBeEqual = (target, arr) => {
  const targetMap = new Map();
  const arrMap = new Map();

  for (let i = 0; i < target.length; i += 1) {
    const targetValue = target[i];
    targetMap.set(targetValue, (targetMap.get(targetValue) || 0) + 1);

    const arrValue = arr[i];
    arrMap.set(arrValue, (arrMap.get(arrValue) || 0) + 1);
  }

  return (
    targetMap.size === arrMap.size &&
    [...targetMap.keys()].every(key => targetMap.get(key) === arrMap.get(key))
  );
};

// const canBeEqual = (target, arr) => target.sort((a ,b)=> a - b).join("") === arr.sort((a, b) => a - b).join("");
