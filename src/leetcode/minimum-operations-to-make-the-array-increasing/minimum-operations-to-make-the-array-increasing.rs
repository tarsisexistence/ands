impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {
        let mut ans = 0;
        let mut prev = 0;

        for num in nums {
            if prev >= num {
                ans += prev - num + 1;
                prev += 1;
            } else {
                prev = num;
            }
        }

        ans
    }
}


// impl Solution {
//     pub fn min_operations(nums: Vec<i32>) -> i32 {
//         let mut prev = nums[0];
//
//         nums.iter().skip(1).fold(0, |acc,num| {
//             if num - prev <= 0 {
//                 let diff = prev - num;
//                 prev = num + diff + 1;
//                 return acc + diff + 1
//             }
//
//
//             prev = *num;
//             acc
//         })
//     }
// }