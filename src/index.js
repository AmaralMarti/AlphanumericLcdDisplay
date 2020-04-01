import { Alphanumeric } from './alphanumeric'

const disp = Alphanumeric
disp.init("display")
disp.rows = 4
disp.cols = 20
disp.pixelSize = 3
disp.style('blue')
disp.cursor()

document.getElementById('styleGreen').onclick = green
document.getElementById('styleBlue').onclick = blue

function green() {
    disp.style('green')
}

function blue() {
    disp.style('blue')
}

document.getElementById('apply-rows').onclick = () => {
    const rows = document.getElementById('rows').value
    disp.rows = rows
}

document.getElementById('apply-cols').onclick = () => {
    const cols = document.getElementById('cols').value
    disp.cols = cols
}
