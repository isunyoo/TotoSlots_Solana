// https://www.youtube.com/watch?v=-AAtfPHEMbA&ab_channel=Josh%27sDevBox

// Imoport HashMap Library
use std::collections::HashMap;

fn main() {
    let a = 10;
    let b = 15;
    println!("Hello World!, {} {}", a, b);

    // unsigned integer(u8, u16, u32, u64, u128)
    let unsigned: u8 = 10;

    // signed integer(i8, i16, i32, i64, i128)
    let signed: i8 = -10;

    // float is used for decimmals
    let float: f32 = 1.2;
    println!("unsign: {} sign: {} float {}", unsigned, signed, float);

    // char - can only be
    let letter = "c1234";
    let emoji = "\u{1F600}";  // :D
    println!("letter: {}, emoji: {}", letter, emoji);

    // ### Boolean ####
    let is_true: bool = true;
    println!("isTrue {}", is_true);

    // #### Array ####
    let arr: [u8; 3] = [1, 2, 3];
    let other_arr: [u8; 5] = [100; 5];
    println!("index: {}, length: {}", arr[0], other_arr.len());
    // print structure of array and other objects
    println!("{:?}", other_arr);

    // #### Tuple ####
    let tuple: (u8, bool, f32) = (5, true, 2.1);
    let tuple2 = (3, 5);
    // print structure of array and other objects
    println!("first {}, second {}, third {}", tuple.0, tuple.1, tuple.2);
    println!("{:?}", tuple2);

    let (a, b, c) = tuple;
    // destructuring
    println!("fist {}, second {}, third{}", a, b, c);

    // #### Functions ####
    println!("{}", is_even(3));
    println!("{}", is_even(4));

    // #### Mutability ####
    let mut num = 5;
    println!("{}", num);
    num = 3;
    println!("{}", num);

    // #### Arrays + Slices ####
    let arr = [0, 1, 2, 3]; // knows the length
    let slice = &arr[1 .. 3]; // [1, 2] don't know the length
    borrowing_slice(arr, slice);

    // #### Strings ####
    let str: &str = "hello world";
    let mut string: String = String::from("Hello World");

    let slice = &string[.. 6];
    println!("length: {}", slice.len());

    string.push('1');
    string.push_str("! Sunny");
    string = string.replace("Hello", "Bye");
    println!("{}", string);

    // #### If Statenent ####
    let n = 7;
    if n > 0 {
        println!("greater than 0");
    } else if n < 0 {
        println!("less than 0");
    } else {
        println!("is 0");
    }

    // #### For Loop ####
    for i in 0..6{
        // println!("{}", i);
        print!("{}", i);
    }

    // #### While Loop ####
    let mut i = 0;
    while i < 4 {
        println!("{}", i);
        i += 1;
        if i == 3 {
            println!("exit");
            break;
            // continue;
        }
    }

    // #### Match Statement ####
    let i = 4;
    match i {
        0 => println!("0"),
        1 | 2 => println!("1, 2"),
        3..=4 => println!("3, 4"),
        _ => println!("default")
    }

    // #### Struct ####
    let name = String::from("Canary");
    let bird1 = Bird{ name, attack: 5};
    bird1.print_name();

    // #### Traits ####
    println!("{} {}", bird1.can_fly(), bird1.is_animal());

    // #### Enum ####
    let a: MyEnum = MyEnum::A;
    let b: MyEnum = MyEnum::B(5);
    let c: MyEnum = MyEnum::C{x: 10, y: 20};
    println!("{:?}", a);
    println!("{:?}", b);
    println!("{:?}", c);

    if let MyEnum::B(val) = b {
        println!("{}", val);
    }
    if let MyEnum::C{x, y} = c {
        println!("{} {}", x, y);
    }

    // #### Vector ####
    let mut vec: Vec<i64> = vec![1,2,3,4,5];
    vec.len();
    vec[0];
    vec.push(7);
    vec.remove(0);
    println!("{:?}", vec);

    // #### Hash Map ####
    let mut map = HashMap::new();

    map.insert(0, "Hi");
    map.insert(1, "Hi2");
    println!("{:?}", map);

    match  map.get(&0) {
        Some(str1) => println!("{}", str1),
        _ => println!("Doesn't exist in map"),
    }

    match map.get(&2) {
        Some(str) => println!("{}", str),
        _ => println!("Doesn't exist in map"),
    }

    map.remove(&0);
    println!("{:?}", map);

    // #### Options ####
    let divide1: Option<i32> = divide(4, 2);
    let divide2: Option<i32> = divide(2, 3);

    // Unwrapping a 'Some' variant will extract the value wrapped.
    println!("{:?} unwraps to {}", divide1, divide1.unwrap());

    // Unwrapping a 'None' variant will be panic!
    println!("{:?} unwraps to {}", divide2, divide2.unwrap());

    // ### Result ###
    let divideRes = divideResult(4, 2);
    let res = divideRes.expect("we crashed");

    // match divideRes {
    //     Ok(v) => println!("{}", v),
    //     Err(v) => println!("{:?}", v)
    // }
    // if divideRes.is_ok() {
    //     println!("{}", divideRes.unwrap());
    // } 
    // println!("{}", divideRes.unwrap());
    // println!("{}", divideRes.unwrap_or(100));
    println!("{}", res);




}

// #### Functions ####
pub fn is_even(num: u8) -> bool{
    let digit: u8 = num % 2;
    digit == 0 // return bool
}

// #### Arrays + Slices ####
fn borrowing_slice(arr: [u8; 4], slice: &[u8]){
    println!("{:?}", arr);
    println!("{:?}", slice);
    println!("length: {}", slice.len());
    println!("{} {}", slice[0], slice[1]);
}

// #### Struct ####
struct Bird {
    name: String,
    attack: u64
}

impl Bird {
    fn print_name(&self) {
        println!("{}", self.name);
    }
}

// #### Traits ####
trait Animal {
    fn can_fly(&self) -> bool;
    fn is_animal(&self) -> bool {
        true
    }
}

impl Animal for Bird {
    fn can_fly(&self) -> bool {
        true
    }
    fn is_animal(&self) -> bool {
        false
    }
}

// #### Enum ####
#[derive(Debug)]
enum MyEnum {
    A,
    B(i32),
    C{x: i32, y: i32}
}

// #### Options ####
// None, to indicate failure or lack of value, and
// Some(Value), a tuple struct that wraps a value with type T.
fn divide(dividend: i32, divisor: i32) -> Option<i32> {
    if dividend % divisor != 0{
        None
    } else {
        Some(dividend / divisor)
    }
}

// ### Result ###
#[derive(Debug)]
enum MyError {
    Error1
}

// Err, and enum that contains an error code
// Ok(value), A wrapper that contains a value
fn divideResult(dividend: i32, divisor: i32) -> Result<i32, MyError> {
    if dividend % divisor != 0 {
        Err(MyError::Error1)
    } else {
        Ok(dividend / divisor)
    }
}