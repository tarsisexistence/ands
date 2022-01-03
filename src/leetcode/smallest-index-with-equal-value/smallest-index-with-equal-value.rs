impl Solution {
    pub fn smallest_equal(nums: Vec<i32>) -> i32 {
        nums
            .iter()
            .enumerate()
            .position(|(idx,num)| idx as i32 % 10 == *num)
            .map_or(-1, |idx| idx as i32)
    }
}

// impl Solution {
//     pub fn smallest_equal(nums: Vec<i32>) -> i32 {
//         nums
//             .iter()
//             .enumerate()
//             .position(|(idx,num)| idx % 10 == *num as usize)
//             .unwrap_or((-1 as i32) as usize) as i32
//     }
// }