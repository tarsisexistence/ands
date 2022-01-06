impl Solution {
    pub fn two_out_of_three(nums1: Vec<i32>, nums2: Vec<i32>, nums3: Vec<i32>) -> Vec<i32> {
        let mut ans = std::collections::HashSet::new();
        let set1 = nums1.iter().collect::<std::collections::HashSet<_>>();
        let set2 = nums2.iter().collect::<std::collections::HashSet<_>>();

        for v in set2.clone() {
            if set1.contains(v) {
                ans.insert(v);
            }
        }

        for v in nums3.iter() {
            if set1.contains(v) || set2.contains(v) {
                ans.insert(v);
            }
        }

        ans.into_iter().cloned().collect()
    }
}