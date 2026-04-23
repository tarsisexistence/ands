import { addTwoPromises } from './add-two-promises';

describe('[Leetcode] addTwoPromises', () => {
  test('example #1', async () => {
    const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
    const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

    await expect(addTwoPromises(promise1, promise2)).resolves.toBe(7);
  });

  test('example #2', async () => {
    const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));
    const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

    await expect(addTwoPromises(promise1, promise2)).resolves.toBe(-2);
  });
});
