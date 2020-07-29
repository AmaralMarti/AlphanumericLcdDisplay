import { Alphanumeric } from './alphanumeric'

const disp = Alphanumeric
disp.init("display")
disp.rows = 2
disp.cols = 16
disp.pixelSize = 4
disp.pixelSpace = 1
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
