impl Solution {
    pub fn min_moves_to_seat(mut seats: Vec<i32>, mut students: Vec<i32>) -> i32 {
        let mut ans = 0;

        seats.sort();
        students.sort();

        for i in 0..seats.len() {
            ans += i32::abs(seats[i] - students[i]);
        }

        ans
    }
}

// impl Solution {
//     pub fn min_moves_to_seat(mut seats: Vec<i32>, mut students: Vec<i32>) -> i32 {
//         let mut ans = 0;
//
//         seats.sort_unstable();
//         students.sort_unstable();
//
//         seats
//             .iter()
//             .zip(students.iter())
//             .map(|(seat,student)| (seat - student).abs())
//             .sum()
//     }
// }
