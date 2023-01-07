// ❯ cargo run

fn main() {
    // let mut vec = Vec::new();
    // vec.push(1);
    // vec.push(2);

    // println!("{}", vec.len());
    // println!("{}", vec[0]);
    // println!("{}", vec[1]);


    // let mut v = vec![vec![1, 0, 0], vec![ 13, 13, 13, 13, 13, 13 ], vec![0, 0, 1]];
    // let mut v = vec![[ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ]];
    let mut v = vec![];
    v.insert(0, [[ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ], [ 12, 12, 12, 12, 12, 12 ]]);
    println!("{:?}", v[0]);
    println!("{:?}", v.len());

}


// let mut stack = Vec::new();

// stack.push(1);
// stack.push(2);
// stack.push(3);

// while let Some(top) = stack.pop() {
//     // Prints 3, 2, 1
//     println!("{top}");
// }