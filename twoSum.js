// const twoSum = (arr, target) => {
//     const numberMap = new Map()
//     let diff = 0

//     for(let i=0; i<arr.length; i++){

//         diff = target - arr[i]
//         if(numberMap.has(diff)) {
//             return [i, numberMap.get(diff)]
//         }
//         numberMap.set(arr[i], i)
//     }
//     return false
// }

// console.log(twoSum([1,4,6,2,1,3,5], 6))

// abcdba
const maxSubstring = (string) => {
    const stingArr = string.split('')

    let [left, rightt] = [0, 0]
    let max = 0
    let stringSet = new Set()
    let start = 0

    for (let right = 0; right < stingArr.length; right++) {
        // if (!stringSet.has(stingArr[right])) {
            while(stringSet.has(stingArr[right])) {
                stringSet.delete(stingArr[right])
                left++
            }
            stringSet.add(stingArr[right])
            max = stringSet.size
        // } else {
        // }

        if(right - left + 1 > max) {
            max = right - left + 1
            start = left
        }

    }
    return [start, max, string.slice(start, max)]
}

console.log(maxSubstring('abcdebabcd'));
