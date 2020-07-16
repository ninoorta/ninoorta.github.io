// 1. async / await    asynchornous - bất đồng bộ.   synchronous - đồng bộ

// callback
// promise
// async / await


/*
    async >> Không biết khi nào hàm kết thúc
*/


// async function test(){
//     await asyncTask();
//     console.log('task 1 ends!')
//     await asyncTask();
//     console.log('task 2 ends!')    
// }

// test();

// function asyncTask(){
//     return new Promise (function(resolve){
//         setTimeout(resolve, 2000)
//     })
// }


// 2. try / catch / throw / Error

// function test() {
//     let i = 10;

//     try {
//         console.log(1)
//         console.log(2)
//         if (i < 0) {
//             console.log(3)
//             // let error = new Error('Number i must be greater than 0');
//             // throw error;
//             let x = null;
//             x.a
//         }
//         console.log('Success')
//     } catch(error){
//         console.error(error);
//         console.warn(error);

//     }
// }

// test();


// 1. type
// console.log(typeof 1)
// console.log(typeof 'abc')
// console.log(typeof true)
// console.log(typeof {message : 'hello'})

// let a = 1 ;
// console.log(typeof a == 'number')


// 2. boolean (true/false)
// false ~ null , '', 0, false, undefined, NaN
// true  ~ else

// 3. string
// '' ""  ``

// .length
// .toUpperCase()
// .toLowerCase()
// .split()   |  .substring()      cắt chuỗi
// .trim()   xóa dấu cách / dấu xuống dòng đầu , cuối chuỗi
// .includes()   |  /startsWith()  |  .endsWith()  



// 4. number
// parseInt()  || parseFloat()   => chuyển thành số
// Math
// Math.ceil()


// 5. object - class, OOP - lập trinh hướng đối tượng
// 6. array 
// .push()       -     .pop()       thêm / xóa ở cuối mảng
// .unshift()    -    .shift()       thêm / xóa ở đầu mảng
// .find()       - findIndex()      - includes()
let arr1 = [1, 2, 3]
arr1.find(function (number) {
    return number % 2 == 0
})  // 2
// sort()
let arr2 = [7, 3, 5, -1]
arr2.sort()     // [-1, 3, 5, 7]
let arr3 = [{ id: 2 }, { id: 1 }, { id: 3 }]
arr3.sort(function(o1, o2) {
    // return < 0   >> o1 < o2
    // return 0     >>  o1 == o2
    // return > 0   >> o1 > o2
    return o1.id - o2.id
})

// .filter()     lọc mảng
// .map()       duyệt từng phần từ trong mảng và biến đổi mảng
// .reduce()    gộp cả mảng 

// 7. condition? (value if true) : (value if false)
// 8. destructering
// 9. arrow function    

// OOP
    

