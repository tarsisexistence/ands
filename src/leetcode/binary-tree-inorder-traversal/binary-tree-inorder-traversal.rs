// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn inorder_traversal(mut node: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut ans: Vec<i32> = Vec::new();
        let mut stack: Vec<Option<Rc<RefCell<TreeNode>>>> = Vec::new();

        while !stack.is_empty() || node.is_some() {
            if let Some(n) = node {
                stack.push(Some(n.clone()));
                node = n.borrow_mut().left.take();
            } else if let Some(Some(n)) = stack.pop() {
                ans.push(n.borrow().val);
                node = n.borrow_mut().right.take();
            }
        }

        ans
    }
}

// recursive approaches below (not mine ones)

// use std::rc::Rc;
// use std::cell::RefCell;
// impl Solution {
//     pub fn inorder_traversal(mut root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
//         let mut res: Vec<i32> = vec![];
//         Self::inOrder(&mut root, &mut res);
//         res
//     }
//
//     fn inOrder(r: &mut Option<Rc<RefCell<TreeNode>>>, order: &mut Vec<i32>) {
//         if let Some(n) = r {
//             let mut n = n.borrow_mut();
//             Self::inOrder(&mut n.left, order);
//             order.push(n.val);
//             Self::inOrder(&mut n.right, order);
//         }
//     }
// }
//
// use std::rc::Rc;
// use std::cell::RefCell;
// impl Solution {
//     fn inorder_traversal_helper(tree: &Option<Rc<RefCell<TreeNode>>>, vector: &mut Vec<i32>) {
//         if let Some(rc) = tree {
//             let TreeNode { val, left, right } = &*rc.borrow();
//             Self::inorder_traversal_helper(left, vector);
//             vector.push(*val);
//             Self::inorder_traversal_helper(right, vector);
//         }
//     }
//
//     pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
//         let mut ret = vec![];
//         Self::inorder_traversal_helper(&root, &mut ret);
//         ret
//     }
// }