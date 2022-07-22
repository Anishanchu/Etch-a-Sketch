const container = document.querySelector(".container")
const btnGray = document.createElement("button")
const btnBlack = document.createElement("button")
const btnErase = document.createElement("button")
const btnSize = document.createElement("button")
const btnRgb = document.createElement("button")

const buttonscontainer = document.querySelector(".buttons")


function createDivs(col, rows) {
    for (let i = 0; i <(col * rows); i++){
        const div = document.createElement('div')
        div.style.border = "1px solid"
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')

    }
}
createDivs(16,16)

function grayColor() {
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click', () => {
        boxs.forEach( box => box.addEventListener('mouseover' , () => {
            let rNum = Math.floor(Math.random() * 255 )
            box.style.background = `rgb(${rNum},${rNum},${rNum})`;

        }))
    })
     buttonscontainer.appendChild(btnGray).classList.add("btn")
}
grayColor()

function blackColor() {
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () => {
        boxs.forEach( box => box.addEventListener('mouseover' , () => {
            box.style.background = 'black';

        }))
    })
     buttonscontainer.appendChild(btnBlack).classList.add("btn")
}
blackColor()

function eraseColor() {
    const boxs = container.querySelectorAll('.box')
    btnErase.textContent = 'Erase'
    btnErase.addEventListener('click', () => {
        boxs.forEach( box => box.addEventListener('mouseover' , () => {
            box.style.background = 'white';

        }))
    })
     buttonscontainer.appendChild(btnErase).classList.add("btn")
}
eraseColor()

function blackColor() {
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () => {
        boxs.forEach( box => box.addEventListener('mouseover' , () => {
            box.style.background = 'black';

        }))
    })
     buttonscontainer.appendChild(btnBlack).classList.add("btn")
}
blackColor()

function rgbColor() {
    const boxs = container.querySelectorAll('.box')
    btnRgb.textContent = 'Rainbow'
    btnRgb.addEventListener('click', () => {
        boxs.forEach( box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255 )
            let G = Math.floor(Math.random() * 255 )
            let B = Math.floor(Math.random() * 255 )
            box.style.background = `rgb(${R},${G},${B})`;
        }))
    })
     buttonscontainer.appendChild(btnRgb).classList.add("btn")
}
rgbColor()

function reSet() {
    const boxs =container.querySelectorAll('.box')
    boxs.forEach(box => box.remove())
}

function reSize() {
    btnSize.textContent = "Grid Size"
    btnSize.addEventListener('click', () => {
        let user = prompt('Please type the grid size')
        if (user == null || user < 1 || user > 64) {
            reSet ()
            createDivs(16,16)
            blackColor()
            grayColor()
            rgbColor()
            eraseColor()
        }
        else {
            reSet()
            createDivs(user,user)
            blackColor()
            grayColor()
            rgbColor()
            eraseColor()
        }
    })
    buttonscontainer.appendChild(btnSize).classList.add('btn')
}
reSize()
