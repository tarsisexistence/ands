export const setDifference = (arr1, arr2) => {
  const cache = new Set();

  for (let item of arr1) {
    cache.add(item);
  }

  for (let item of arr2) {
    if (cache.has(item)) {
      cache.delete(item);
    } else {
      cache.add(item);
    }
  }

  return [...cache];
};
