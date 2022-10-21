export const flatten = arr => {
  return arr.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc.push(...flatten(value));
    } else {
      acc.push(value);
    }

    return acc;
  }, []);
};
