impl Solution {
    pub fn find_center(edges: Vec<Vec<i32>>) -> i32 {
        let a = edges[0][0];

        if (a == edges[1][0] || a == edges[1][1]) {
            a
        } else {
            edges[0][1]
        }
    }
}