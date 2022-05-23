use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn check_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        let node = root.as_ref().unwrap().borrow();
        let left = node.left.as_ref().unwrap().borrow();
        let right = node.right.as_ref().unwrap().borrow();

        node.val == left.val + right.val
    }
}