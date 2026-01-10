function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}


const arr = [
  { id: 1, name: "Ashish" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Ashish" }
];

const a = Array.from(
    new Map(arr.map(each=>[each.id, each])).values()
);
console.log(a);
