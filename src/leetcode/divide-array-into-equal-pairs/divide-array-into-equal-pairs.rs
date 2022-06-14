impl Solution {
    pub fn divide_array(nums: Vec<i32>) -> bool {
        let mut set = std::collections::HashSet::new();

        for num in nums {
            if set.contains(&num) {
                set.remove(&num);
            } else {
                set.insert(num);
            }
        }

        set.len() == 0
    }
}