import { getDecimalValue } from './convert-binary-number-in-a-linked-list-to-integer';
import { ListNode } from '../../utils/node';

describe('[Leetcode] getDecimalValue', () => {
  test('example #1', () => {
    expect(getDecimalValue(new ListNode(1, new ListNode(0, new ListNode(1))))).toBe(5);
  });

  test('example #2', () => {
    expect(getDecimalValue(new ListNode(0))).toBe(0);
  });

  test('example #3', () => {
    expect(getDecimalValue(new ListNode(1))).toBe(1);
  });

  test('example #4', () => {
    expect(
      getDecimalValue(
        new ListNode(
          1,
          new ListNode(
            0,
            new ListNode(
              0,
              new ListNode(
                1,
                new ListNode(
                  0,
                  new ListNode(
                    0,
                    new ListNode(
                      1,
                      new ListNode(
                        1,
                        new ListNode(
                          1,
                          new ListNode(
                            0,
                            new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0)))))
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    ).toBe(18880);
  });

  test('example #5', () => {
    expect(getDecimalValue(new ListNode(0, new ListNode(0)))).toBe(0);
  });
});
