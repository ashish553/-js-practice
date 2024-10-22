const event = new Event('customClick');
console.log(document);

const mybutton = document.getElementById('customEventButton');
console.log(mybutton);


mybutton.addEventListener('customClick', () => {
    alert('Custom Event Called!')
})

mybutton.onclick = () => {
    mybutton.dispatchEvent(event)
}

