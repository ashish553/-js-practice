const heading = document.querySelector('h1')
const container = document.querySelector('#testContainer')

heading.addEventListener('click', (e) => {
    // e.stopPropagation() //stop bubbling  
    console.log('CLicked');
})

container.addEventListener('click', () => {
    console.log('Container called');
}, true) //capturing