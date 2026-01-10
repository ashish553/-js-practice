const obj = {a: {b: {c: {d: 1}}}}
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
const flattenObject = (obj, parentKey, result={}) => {
    for(let key in obj){
        const newKey = parentKey ? `${parentKey}.${key}` : key

        if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key], newKey, result)
        } else {
            result[newKey] = obj[key]
        }
    }
    return result
}


console.log(flattenObject(testInput));


