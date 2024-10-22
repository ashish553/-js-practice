const itemsArray = Array.from({ length: 100 }, (_, i) => `Item${i + 1}`);

console.log(itemsArray);

const totalElemetnPerPage = 10
const totalItems = itemsArray.length
let currentStartElement = 0
let currentLastElement = totalElemetnPerPage

const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const listCOntainer = document.getElementById('list')
const currentPageDiv = document.getElementById('currentPage')
let currentPage = 1

function giveCurretnPageList(completeList,currentStartElement, currentLastElement) {
    return completeList.slice(currentStartElement,currentLastElement)
}

function renderList(list) {
    list.forEach(element => {
        const item = document.createElement('div')
        item.textContent = element
        listCOntainer.appendChild(item)
    });

}

prevButton.addEventListener('click',()=>{
    console.log('asdd',currentStartElement);
    
    if(currentStartElement > 0) {
        listCOntainer.innerHTML = ''
        currentStartElement -= totalElemetnPerPage
        currentLastElement -= totalElemetnPerPage
        renderList(giveCurretnPageList(itemsArray,currentStartElement,currentLastElement));
        --currentPage 
        currentPageDiv.innerText = `${currentPage}`

    }
    
})

nextButton.addEventListener('click',()=>{
    if(currentLastElement < totalItems) {
        listCOntainer.innerHTML = ''
        currentStartElement += totalElemetnPerPage
        currentLastElement += totalElemetnPerPage
        renderList(giveCurretnPageList(itemsArray,currentStartElement,currentLastElement));
        ++currentPage 
        currentPageDiv.innerText = `${currentPage}`

    }
})

renderList(giveCurretnPageList(itemsArray,currentStartElement,currentLastElement));
currentPageDiv.innerText = currentPage
