impl Solution {
    pub fn count_good_triplets(arr: Vec<i32>, a: i32, b: i32, c: i32) -> i32 {
        let mut ans = 0;
        let len = arr.len();

        for i in 0..(len - 2) {
            for j in (i + 1)..(len - 1) {
                if ((arr[i] - arr[j]).abs() > a) {
                    continue;
                }

                for k in (j + 1)..len {
                    if ( (arr[j] - arr[k]).abs() > b || (arr[i] - arr[k]).abs() > c) {
                        continue;
                    }

                    ans += 1;
                }
            }
        }

        ans
    }
}

// impl Solution {
//     pub fn count_good_triplets(arr: Vec<i32>, a: i32, b: i32, c: i32) -> i32 {
//         let mut counter = 0;
//         let l = arr.len();
//
//         arr[..l - 2].iter().enumerate().for_each(|(i, &ai)| {
//             arr[..l - 1]
//                 .iter()
//                 .enumerate()
//                 .skip(i + 1)
//                 .filter(|(_, aj)| (ai - **aj).abs() <= a)
//                 .for_each(|(j, &aj)| {
//                     arr[j + 1..l]
//                         .iter()
//                         .filter(|&&ak| (aj - ak).abs() <= b && (ai - ak).abs() <= c)
//                         .for_each(|_| {
//                             counter += 1;
//                         })
//                 })
//         });
//         counter
//     }
// }