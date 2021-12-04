// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn merge_two_lists(
        mut list1: Option<Box<ListNode>>,
        mut list2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        if list1.is_none() {
            return list2;
        }
        if list2.is_none() {
            return list1;
        }

        let mut pre_head = ListNode::new(-1);
        let mut tail = &mut pre_head;

        while list1.is_some() && list2.is_some() {
            if list1.as_ref().unwrap().val <= list2.as_ref().unwrap().val {
                // old version: `to_owned()` will clone the data from borrowed data
                // let tmp = list1.as_ref().unwrap().next.to_owned();
                // tail.next = list1.take();
                // tail = tail.next.as_mut().unwrap();
                // list1 = tmp;

                // better version: without data clone
                tail.next = list1.take();
                tail = tail.next.as_mut().unwrap();
                list1 = tail.next.take();
            } else {
                tail.next = list2.take();
                tail = tail.next.as_mut().unwrap();
                list2 = tail.next.take();
            }
        }

        if list1.is_some() {
            tail.next = list1.take();
        }
        if list2.is_some() {
            tail.next = list2.take();
        }

        pre_head.next
    }
}