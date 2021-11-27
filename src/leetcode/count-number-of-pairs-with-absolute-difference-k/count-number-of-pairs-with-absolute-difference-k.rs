impl Solution {
    pub fn count_k_difference(nums: Vec<i32>, k: i32) -> i32 {
        let mut ans = 0;
        let len = nums.len();

        for i in 0..len {
            for j in i + 1..len {
                if i32::abs(nums[j] - nums[i]) == k {
                    ans += 1;
                }
            }
        }

        ans
    }
}

// impl Solution {
//     pub fn count_k_difference(mut nums: Vec<i32>, k: i32) -> i32 {
//         let mut ans = 0;
//         let len = nums.len();
//         nums.sort();
//
//         for i in 0..len {
//             for j in i + 1..len {
//                 if (nums[j] - nums[i] == k) {
//                     ans += 1;
//                 }
//             }
//         }
//
//         ans
//     }
// }
//
