impl Solution {
    pub fn sum_odd_length_subarrays(arr: Vec<i32>) -> i32 {
        let mut ans: i32 = 0;
        let mut len = arr.len();

        for i in 0..len {
            for j in i..len {
                if ((j - i) % 2 == 0) {
                    ans += arr.iter().skip(i).take(j - i + 1).sum::<i32>();
                }
            }
        }

        ans
    }
}

// impl Solution {
//     pub fn sum_odd_length_subarrays(arr: Vec<i32>) -> i32 {
//         (1..=arr.len())
//             .step_by(2)
//             .map(|n| arr.windows(n).map(|s| s.iter().sum::<i32>()).sum::<i32>())
//             .sum()
//     }
// }

// impl Solution {
//     pub fn sum_odd_length_subarrays(arr: Vec<i32>) -> i32 {
//         let mut res = 0;
//         for i in (1..=arr.len()).step_by(2) {
//             for w in arr.windows(i) {
//                 res += w.iter().sum::<i32>();
//             }
//         }
//         res
//     }
// }