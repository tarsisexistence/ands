impl Solution {
    pub fn diagonal_sum(mat: Vec<Vec<i32>>) -> i32 {
        mat.iter().enumerate().fold(0, |mut acc, (i, inner)| {
            let j = mat.len() - 1 - i;

            acc += mat[i][i];

            if i != j {
                acc += mat[i][j];
            }

            acc
        })
    }
}

// impl Solution {
//     pub fn diagonal_sum(mat: Vec<Vec<i32>>) -> i32 {
//         let mut sum = 0;
//         let len = mat.len();
//
//         for i in 0..len {
//             let j = len - 1 - i;
//
//             sum += mat[i][i];
//
//             if i != j {
//                 sum += mat[i][j];
//             }
//         }
//
//         sum
//     }
// }