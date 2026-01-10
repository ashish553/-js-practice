function findSmallest(arr) {
  // your solution here
  let min = arr[0];
  for (let i of arr) {
    if (i < min) {
      min = i
    }
  }
  return min
}
// console.log(findSmallest([5, 3, 8, 1, 4]));


const curryFunction = (func) => {
  return function curriedFunction(...args){
    if(args.length === func.length) {
      return func.apply(this, args)
    }
    return function(...args2) {
      return curriedFunction.apply(this, args.concat(args2))
    }
    // }
  }
}


const add = (a,b,c) => {
    return a+b+c
}

const newf = curryFunction(add)(1)(2);
console.log(newf(100));