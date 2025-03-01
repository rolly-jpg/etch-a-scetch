const gridContainer = document.querySelector('.container')

drawGrid(16)

function drawGrid(gridSize) {
    document.querySelectorAll('.row')
    document.querySelectorAll('.item')
    const itemSize = 600/gridSize
    for (let i = 0; i<gridSize;i++) {
        let newRow = document.createElement('div')
        newRow.classList.add(`row`)
        gridContainer.appendChild(newRow)
        for (let j = 0; j<gridSize; j++) {
            let newItem = document.createElement('div')
            newItem.classList.add(`row_${i}_column_${j}`,`item`)
            newItem.style.height = itemSize + 'px'
            newItem.style.width = itemSize + 'px'
            newRow.appendChild(newItem)
        }
    }

    const item = document.querySelectorAll('.item')
    item.forEach((element) => {
        element.addEventListener('mouseover', changeColor)
    })
}

function changeColor() {
    return this.style.backgroundColor='hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)'
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', ()=>{
    let gridSize = 0

    while (isNaN(gridSize) || gridSize <= 0 || gridSize > 100)
        gridSize = +prompt('New grid size between 1 and 100', 16);

    clearGrid()
    drawGrid(gridSize);
})

function clearGrid() {
    const item = document.querySelectorAll('.item')
    item.forEach((element) => {
        element.removeEventListener('mouseover', changeColor)
    })
    
    gridContainer.replaceChildren()
}