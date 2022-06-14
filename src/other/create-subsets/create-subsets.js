export const createSubsets = array => {
  const subsets = [[]];

  for (let i = 0; i < array.length; i += 1) {
    const last = subsets.length - 1;

    for (let j = 0; j <= last; j += 1) {
      subsets.push([...subsets[j], array[i]]);
    }
  }

  return subsets;
};
