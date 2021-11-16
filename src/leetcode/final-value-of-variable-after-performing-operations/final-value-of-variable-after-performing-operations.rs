impl Solution {
    pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
        let mut x = 0;

        for &n in operations.iter() {
            if &n.chars().nth(0).unwrap() == '+' {
                x += 1;
            } else {
                x -= 1;
            }
        }

        x
    }
}

// pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
// 	operations
// 		.iter()
// 		.fold(0, |acc, op| {
// 			if op.contains("+") { acc + 1 } else { acc - 1 }
// 		})
// }
// impl Solution {
//     pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
//         operations
//             .iter()
//             .flat_map(|s| {
//                 s.chars().map(|c| match c {
//                     '+' => 1,
//                     '-' => -1,
//                     _ => 0,
//                 })
//             })
//             .sum::<i32>()
//             / 2
//     }
// }