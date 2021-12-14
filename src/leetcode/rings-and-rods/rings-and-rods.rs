impl Solution {
    pub fn count_points(rings: String) -> i32 {
        let mut vec = vec![String::from(""); 10];
        let mut chars = rings.chars().collect::<Vec<_>>();

        for (i, value) in chars.iter().step_by(2).enumerate() {
            let index: usize = (chars[i * 2 + 1].to_string()).parse::<usize>().unwrap();

            vec[index].push(*value);
        }

        vec.iter().filter(|s| s.contains("R") && s.contains("G") && s.contains("B")).count() as i32
    }
}

// impl Solution {
//     pub fn count_points(rings: String) -> i32 {
//         let mut rods = [0; 10];
//         rings.as_bytes().chunks(2).for_each(|pair| {
//             rods[(pair[1] - b'0') as usize] |= match pair[0] {
//                 b'R' => 0b001,
//                 b'G' => 0b010,
//                 _ => 0b100,
//             };
//         });
//         rods.iter().filter(|&&x| x == 0b111).count() as _
//     }
// }