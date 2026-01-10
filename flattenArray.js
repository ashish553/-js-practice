const arr = [1,2,[3,4],[5,[6,7,8],9],0]
// console.log(arr);

const newArr = []
const flattenArray = (arr) => {
    for(let i of arr){
        if(Array.isArray(i)){
            flattenArray(i)
        } else {
            newArr.push(i)
        }
    }
}

flattenArray(arr)
console.log(newArr);
