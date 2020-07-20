import { ListNode } from '../../utils/node';

/**
 * @param {(string|number)[]} values
 * @return {ListNode}
 */
export const createList = values => {
  if (values.length === 0) {
    return null;
  }

  const head = new ListNode(values.shift());
  let current = head;

  while (values.length > 0) {
    const value = values.shift();
    current.next = new ListNode(value);
    current = current.next;
  }

  return head;
};
