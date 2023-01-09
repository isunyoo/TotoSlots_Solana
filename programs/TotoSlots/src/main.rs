
fn main() {
    // let mut vec = Vec::new();
    // vec.push(1);
    // vec.push(2);

    // println!("{}", vec.len());
    // println!("{}", vec[0]);
    // println!("{}", vec[1]);

    let mut v = vec![];
    v.insert(0, [[ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ], [ 12, 12, 12, 12, 12, 12 ]]);
    println!("{:?}", v[0]);
    println!("{:?}", v.len());
    let s = format!("{:?}", &v[0]);
    println!("{}", s);

    // slots.insert(0, [rnd, rnd, rnd, rnd, rnd, rnd], [rnd, rnd, rnd, rnd, rnd, rnd], [rnd, rnd, rnd, rnd, rnd, rnd])
    // let slots = &mut slots.push(1);
    // let v = vec![];
    // v.insert(0, [[rnd, rnd, rnd, rnd, rnd, rnd], [rnd, rnd, rnd, rnd, rnd, rnd], [rnd, rnd, rnd, rnd, rnd, rnd]]);

    let v = [[0; 6]; 1];
    println!("{:?}", v);
    // v = [[ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ], [ 11, 11, 11, 11, 11, 11 ]];
    // println!("{:?}", v);

}


