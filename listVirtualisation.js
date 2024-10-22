const scrollContainer = document.querySelector('.scrollContainer')
const spacer = document.querySelector('.spacer')
const listContainer = document.querySelector('.list')
const listItemHeight = 30
const numberOfVisibleListItem = 4
const bufferItemNumber = 3

const mylist = ['John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam','John', 'Anna', 'Zara', 'Michael', 'Kate', 'David', 'Olivia', 'Ben', 'Sophia', 'Liam']

const totalListItem = mylist.length


// listContainer.style.height = listItemHeight+'px'
listContainer.style.position = 'absolute'
spacer.style.height = listItemHeight * totalListItem + 'px'
scrollContainer.style.height = numberOfVisibleListItem * listItemHeight + 'px'
scrollContainer.style.overflow = 'auto'
scrollContainer.style.position = 'relative'

function handleScroll() {
    listContainer.innerHTML = ''
    const startIndex = Math.max(0, Math.floor(scrollContainer.scrollTop / listItemHeight) - bufferItemNumber)
    const endIndex = Math.min(totalListItem - 1, Math.floor((scrollContainer.scrollTop + scrollContainer.clientHeight) / listItemHeight) + bufferItemNumber)
    listContainer.style.top = startIndex * listItemHeight + 'px'

    for (let index = startIndex; index <= endIndex; index++) {
        const item = document.createElement('li');
        item.classList.add('listitem')
        item.textContent = mylist[index]
        item.style.height = listItemHeight + 'px'
        listContainer.appendChild(item)
    }
}

scrollContainer.addEventListener('scroll', handleScroll)
handleScroll()


