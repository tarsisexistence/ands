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