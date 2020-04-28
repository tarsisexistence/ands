export const getQueueChecker = (Constructor, constructorCmd) => (
  commands,
  inputs
) => {
  if (commands.length !== inputs.length) {
    throw new Error('lengths of commands and inputs are different');
  }

  const results = [];
  let cacheInstance = null;

  for (let i = 0; i < commands.length; i += 1) {
    const cmd = commands[i];
    const input = inputs[i];

    if (cmd === constructorCmd) {
      cacheInstance = new Constructor(...input);
      results.push(null);
    } else {
      const value = cacheInstance[cmd](...input);
      results.push(value === undefined ? null : value);
    }
  }

  return results;
};
