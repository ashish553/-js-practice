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
