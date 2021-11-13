impl Solution {
    pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
        let length = nums.len();
        let mut ans = vec![0; length];

        for i in 0..length {
            ans[i] = nums[nums[i] as usize];
        }

        ans
    }
}

// impl Solution {
//     pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
//         let mut res: Vec<i32> = Vec::with_capacity(nums.len());
//         for &n in nums.iter() {
//             res.push(nums[n as usize]);
//         }
//         res
//     }
// }

// impl Solution {
//     pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
//         let len_n = nums.len();
//
//         let ans: Vec<i32> = {
//             let mut tmp = vec![0; len_n];
//             for (idx, &num) in nums.iter().enumerate(){
//                 tmp[idx] = nums[num as usize];
//             }
//             tmp
//         };
//
//         ans
//     }
// }