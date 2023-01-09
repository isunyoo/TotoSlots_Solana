fn main() {
    let mut vec = Vec::new();
    vec.push(1);
    vec.push(2);
    println!("{}", vec.len());
    println!("{}", vec[0]);
    println!("{}", vec[1]);


    let mut v = vec![];
    v.insert(0, [[ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ], [ 12, 12, 12, 12, 12, 12 ]]);
    println!("{:?}", v[0]);
    println!("{:?}", v.len());


    let mut stack = Vec::new();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    while let Some(top) = stack.pop() {
        // Prints 3, 2, 1
        println!("{top}");
    }

    
    let mut vec: Vec<i64> = vec![1,2,3,4,5];
    vec.len();
    vec[0];
    vec.push(7);
    vec.remove(0);
    println!("{:?}", vec);


    let width = 4;
    let height = 4;
    let mut array = vec![vec![0; width]; height];
    array[2][2] = 5;
    println!("{:?}", array);
    // 0 0 0 0
    // 0 0 0 0
    // 0 0 5 0
    // 0 0 0 0

}