struct ParkingSystem {
    space: Vec<i32>,
}


/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl ParkingSystem {
    fn new(big: i32, medium: i32, small: i32) -> Self {
        Self {
            space: vec!(big, medium, small)
        }

    }

    fn add_car(&mut self, car_type: i32) -> bool {
        let index = (car_type - 1) as usize;
        self.space[index] -= 1;

        return self.space[index] >= 0;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * let obj = ParkingSystem::new(big, medium, small);
 * let ret_1: bool = obj.add_car(carType);
 */


// impl ParkingSystem {
//
//     fn new(big: i32, medium: i32, small: i32) -> Self {
//         Self {
//             big,
//             medium,
//             small
//         }
//
//     }
//
//     fn add_car(&mut self, car_type: i32) -> bool {
//         match car_type {
//             1 => {
//                 if (self.big < 1) {
//                     return false
//                 }
//
//                 self.big -= 1
//             }
//             2 => {
//                 if (self.medium < 1) {
//                     return false
//                 }
//
//                 self.medium -= 1
//             }
//             3 => {
//                 if (self.small < 1) {
//                     return false
//                 }
//
//                 self.small -= 1
//             }
//             _ => return false
//
//         }
//
//         return true;
//     }
// }
