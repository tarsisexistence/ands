impl Solution {
    pub fn min_partitions(n: String) -> i32 {
        let mut max = 0;

        for s in n.chars() {
            max = std::cmp::max(max, s.to_digit(10).unwrap() as i32)
        }

        max
    }
}

// fn min_partitions(n: String) -> i32 {
//         n.chars()
//             .max()
//             .unwrap()
//             .to_digit(10)
//             .unwrap() as i32
// }


// fn min_partitions(n: String) -> i32 {
//      n.chars()
// 		.map(|c| c.to_digit(10).unwrap() as i32)
// 		.max()
// 		.unwrap()
// }