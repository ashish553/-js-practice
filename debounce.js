const searchInput = document.getElementById('search')
const ul = document.querySelector('ul')


const handleInput = async (e) => {
    ul.innerHTML = ''
    // console.log(e.target.value);
    const searchKey = e.target.value
    const data = await (await fetch(`https://www.google.com/complete/search?q=${searchKey}&client=firefox`)).json()
    // console.log(data);
    data[1].forEach(each => {
        const li = (document.createElement('li')).appendChild(document.createTextNode(each))
        // console.log(li);
        ul.appendChild(li)
    });
}
const handleChange = debounced(handleInput, 300)
searchInput.oninput = (e) => {
    handleChange(e)
}

function debounced(anyFunction, delay) {
    let timeout = ''
    return (args) => {
        console.log('...args',args);
        
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            anyFunction(args)
        },delay)
    }
    
}