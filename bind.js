const user = {
    name: 'Ashish',
    state: 'Delhi'
}

function logName() {
    console.log(this.name);
}

logName.call(user);

Function.prototype.customCall = function (currentObj, ...args) {
    const currentFunction = this
    currentObj.tempFunc = currentFunction
    currentObj.tempFunc(...args)
    delete currentFunction.tempFunc
}

console.log(logName.customCall(user));
