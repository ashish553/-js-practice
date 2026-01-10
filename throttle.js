 const container = document.getElementById('testContainer')

const handleHover = () => {
    console.log('API called!');
}

const throttled = (anyFunc, delay) => {
    let timeout
    return function (args) {
        if(!timeout) {
            anyFunc(args)
            timeout = setTimeout(() => {
                timeout = null
            }, delay);
        }
    }
}

const handleHoverDebounce = throttled(handleHover, 2000)

container.onclick = (e) => {
    handleHoverDebounce(e)
}