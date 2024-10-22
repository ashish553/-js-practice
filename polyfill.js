Array.prototype.customMap = function (callback) {
    const arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this))
    }
    return arr
}

const arr = [1, 2, 33, 4, 5, 6]

console.log(arr.customMap((each, index) => {
    return index * 2
}));


Array.prototype.customFilter = function (callback) {
    const arr = []
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) && arr.push(this[i])        
    }
    return arr
}

console.log(arr.customFilter((each,index)=>{
    return index%2 === 0
}))