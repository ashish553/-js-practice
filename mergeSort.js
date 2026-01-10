const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

const merge = (left, right) => {
    let i=0, j=0
    let res = []
    while(i<left.length && j<right.length) {
        if(left[i] < right[j]){
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }
    return res.concat(left.slice(i)).concat(right.slice(j))
}

console.log(mergeSort([7,4,5,1,3,2]));
