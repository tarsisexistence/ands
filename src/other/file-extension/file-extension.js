/**
 * @param {string} filename
 * @return {string}
 */
export const fileExtension = filename => {
  const split = filename.split('.').filter(value => value !== '');

  return split.length > 1 ? split[split.length - 1] : '';
};
