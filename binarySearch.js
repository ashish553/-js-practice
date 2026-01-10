// const binarySearch = (arr, target) => {
//     let low = 0, high = arr.length - 1

//     while(low <= high) {
//         const mid = Math.floor((low+high)/2)
//         if(target === arr[mid]) return mid
//         else if(target < arr[mid]) high = mid-1
//         else if(target > arr[mid]) low = mid+1
//     }
//     return -1
// }

// console.log(binarySearch([1,2,3], 1));


// function deepClone(myObj, output) {
//     if(myObj === null || typeof myObj !== object) return myObj

//     let clone = Array.isArray(myObj) ? [] : {}

//     for(let key in myObj) {
//         clone[key] = deepClone(myObj[key])
//     }

//     return clone
// }

// const anObj = {a: 1, b: {c: 10, d: 20}}
// console.log(deepClone(anObj, {}));

const testInput = {
  user: {
    id: 101,
    profile: {
      name: "Alice",
      address: {
        city: "New York",
        zip: 10001
      }
    }
  },
  preferences: ["dark-mode", "notifications"],
  metadata: {
    lastLogin: null,
    isActive: true,
    emptyBox: {}
  },
  "status.code": 200 // Key already contains a dot
};

function flattenObject(myObj, parentKey, res) {
    for (let key in myObj) {
        
        const newKey = parentKey ?  `${parentKey}.${key}` : key
        if(!Array.isArray(myObj[key]) && typeof myObj[key] === 'object') {
            flattenObject(myObj[key], newKey, res)
        } else {
            res[newKey] = myObj[key]
        }
    }
    return res
}

console.log(flattenObject(testInput,'',{}));
