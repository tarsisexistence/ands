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
