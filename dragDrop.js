let startX=0, startY=0

const box = document.getElementById('item')

box.addEventListener('mousedown', handleMouseDown)
box.addEventListener('mouseup', handleMouseUp)


function handleMouseDown(e) {
    startX = e.clientX
    startY = e.clientY
    console.log("1:: ", startX, startY);
    
    box.addEventListener('mousemove', handleMouseMove)
}

function handleMouseMove(e) {
    const left = e.clientX - startX
    const top = e.clientY - startY

    startX = e.clientX
    startY = e.clientY

    console.log("2:: ", top, left);

    box.style.top = top+'px'
    box.style.left = left+'px'
}

function handleMouseUp(e) {
    // box.removeEventListener('mousedown', handleMouseDown)
    box.removeEventListener('mousemove', handleMouseMove)
}