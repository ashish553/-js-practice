const addition = (a) => {
    return function (b){
        if(!b) return a
        else return addition(a+b)
    }
}

console.log(addition(1)(2)(3)(1)(2)(3)(1)(2)(3)(1)(2)(3)(1)(2)(3)());

const convertToCurriedFunction = (fn) => {
    return function curriedFunction(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        }
        return function (...newArgs){
            return curriedFunction.apply(this, args.concat(newArgs))
        }
    }
}

const add = (a,b,c) => {
    return a+b+c
}

const newf = convertToCurriedFunction(add)(1)(2);
console.log(newf(100));

