const addition = (a) => {
    return function (b){
        if(!b) return a
        else return addition(a+b)
    }
}

console.log(addition(1)(2)(3)(1)(2)(3)(1)(2)(3)(1)(2)(3)(1)(2)(3)());
