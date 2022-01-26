impl Solution {
    pub fn nearest_valid_point(x: i32, y: i32, points: Vec<Vec<i32>>) -> i32 {
        let mut min_distance = std::i32::MAX;
        let mut index = -1;

        for idx in 0..points.len() {
            let point_x = points[idx][0];
            let point_y = points[idx][1];

            let is_valid = x == point_x || y == point_y;
            let distance = if x == point_x {
                i32::abs(y - point_y)
            } else {
                i32::abs(x - point_x)
            };

            if is_valid && distance < min_distance {
                min_distance = distance;
                index = idx as i32;
            }
        }

        index
    }
}
