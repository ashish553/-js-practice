// function parent() {
//     let a = 10
//     function child() {
//         return a*5
//     }
//     return child
// }

// const b = parent()

// console.log(b());
// console.log(a);

const arr = [['one', 1], ['two', 2], ['three', 3]]
console.log(Object.fromEntries(arr)['one']);
