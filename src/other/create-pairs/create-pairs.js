export const createPairs = array => {
  const pairs = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (i !== j) {
        pairs.push([array[i], array[j]]);
      }
    }
  }

  return pairs;
};
