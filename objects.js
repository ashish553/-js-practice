const details = {
    // namee: 'Ashish',
    state: 'Delhi'
}
// console.log(details);

Object.defineProperty(details, 'namee', {
    get() {
        console.log('Getting name');
        
        return this.name
    },
    set(value) {
        console.log('Setting value to:', value);
        
        this.namee = value
    }
})
console.log(details.namee);

// Object.assign
const anObj = new Object()
console.log(anObj);

for (const key in details) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
        
    // }
    console.log(key);
    
}

console.log(Object.keys(details));
console.log(JSON.stringify(Object.getPrototypeOf(details)));
