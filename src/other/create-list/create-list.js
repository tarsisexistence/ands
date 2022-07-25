import { ListNode } from '../../utils/node';

/**
 * @param {(string|number)[]} values
 * @return {ListNode}
 */
export const createList = values => {
  if (values.length === 0) {
    return null;
  }

  values.reverse();
  const head = new ListNode(values.pop());
  let current = head;

  while (values.length > 0) {
    current.next = new ListNode(values.pop());
    current = current.next;
  }

  return head;
};

export const createCycledList = (values, cycleIndex) => {
  if (values.length === 0) {
    return null;
  }

  const head = new ListNode(null);
  let current = head;
  let cycleNode = null;

  for (let i = 0; i < values.length; i += 1) {
    const node = new ListNode(values[i]);

    if (i === cycleIndex) {
      cycleNode = node;
    }

    current.next = node;
    current = current.next;
  }

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
};
