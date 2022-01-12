impl Solution {
    pub fn maximum_units(mut box_types: Vec<Vec<i32>>, mut truck_size: i32) -> i32 {
        let mut ans = 0;
        box_types.sort_by(|a, b| b[1].cmp(&a[1]));

        for box_type in box_types.iter() {
            let mut boxes = box_type[0];
            let units = box_type[1];

            while boxes > 0 && truck_size > 0 {
                boxes -=1;
                truck_size -= 1;
                ans += units;
            }

            if truck_size == 0 {
                break;
            }
        }


        ans
    }
}

// impl Solution {
//     pub fn maximum_units(mut box_types: Vec<Vec<i32>>, mut truck_size: i32) -> i32 {
//         box_types.sort_unstable_by_key(|b| std::cmp::Reverse(b[1]));
//         box_types
//             .iter()
//             .map(|b| (b[0], b[1]))
//             .fold(0, |acc, (n, units)| {
//                 let take = n.min(truck_size);
//                 truck_size -= take;
//                 acc + take * units
//             })
//     }
// }