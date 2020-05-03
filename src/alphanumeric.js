import { characters } from './digits/characters'
import { cursors } from './digits/cursors'

const Alphanumeric = {
  init(canvasId) {
    this._canvas = document.getElementById(canvasId)
    this._context = this._canvas.getContext("2d")
    // this._context.scale(0.5, 0.5)

    this._loadStyles()
    this.style('green')

    this._pixelSize = 4
    this._pixelSpace = 1
    this._charWidth = 5
    this._charHeight = 8
    this._padding = 20

    this._rows = 4
    this._cols = 20

    this._loadCursorStyles()
    this.cursorStyle = this._cursorStyles[0]

    this._cursorPosition = {
      row: 1,
      col: 1,
    }

    this._text = '1234567890-abcdefghijklmnopqrstuvwxyz=ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    this._positions = []

    this._drawComponent()
  },

  get cursorStyle() {
    return this._cursorStyle
  },

  set cursorStyle(style) {
    if (this._cursorStyles.includes(style)) {
      this._cursorStyle = style
    }
  },

  get cursorPosition() {
    return this._cursorPosition
  },

  set cursorPosition(value) {
    const { row = 0, col = 0 } = value

    if ((row > 0) && (row <= this._rows)) {
      this._cursorPosition.row = row
    }

    if ((col > 0) && (col <= this._cols)) {
      this._cursorPosition.col = col
    }
  },

  style(value) {
    const style = this._styles[value]
    if (style !== undefined) {
      this._backgroundColor = style._backgroundColor
      this._dotOff = style._dotOff
      this._dotOn = style._dotOn

      this._drawComponent()
    }
  },

  cursor(row = 1, col = 1) {
    /*
    let active = true
    setInterval(() => {
      let color = undefined
      if (active) {
        color = this._dotOn
      }
      active = !active
      this._drawBaseChar(row, col, color)
    }, 400)
    */
  },

  get padding() {
    return this._padding
  },

  set padding(value) {
    this._padding = value
    this._drawComponent()
  },

  get backgroundColor() {
    return this._backgroundColor
  },

  set backgroundColor(value) {
    this._backgroundColor = value
    this._drawComponent()
  },

  get dotOff() {
    return this._dotOff
  },

  set dotOff(value) {
    this._dotOff = value
    this._drawComponent()
  },

  get dotOn() {
    return this._dotOn
  },

  set dotOn(value) {
    this._dotOn = value
    this._drawComponent()
  },

  get pixelSize() {
    return this._pixelSize
  },

  set pixelSize(value) {
    this._pixelSize = value
    this._drawComponent()
  },

  get pixelSpace() {
    return this._pixelSpace
  },

  set pixelSpace(value) {
    this._pixelSpace = value
    this._drawComponent()
  },

  get charWidth() {
    return this._charWidth
  },

  set charWidth(value) {
    this._charWidth = value
    this._drawComponent()
  },

  get charHeight() {
    return this._charHeight
  },

  set charHeight(value) {
    this._charHeight = value
    this._drawComponent()
  },

  get rows() {
    return this._rows
  },

  set rows(value) {
    this._rows = value
    this._drawComponent()
  },

  get cols() {
    return this._cols
  },

  set cols(value) {
    this._cols = value
    this._drawComponent()
  },

  _loadStyles() {
    this._styles = {
      green: {
        _backgroundColor: '#b5e803',
        _dotOff: '#a2ca32',
        _dotOn: '#2b4b02',
      },
      blue: {
        _backgroundColor: '#0493fc',
        _dotOff: '#0173c7',
        _dotOn: '#ffffff',
      }
    }
  },

  _loadCursorStyles() {
    this._cursorStyles = ['none', 'line', 'lineBlink', 'bar', 'barBlink']
  },

  _getCharMatrix(x, y) {
    const positions = []
    for (let row = 0; row < this._charHeight; row++) {
      positions[row + 1] = []
      const _y = ((this._pixelSpace + this._pixelSize) * row) + this._pixelSpace + y
      for (let col = 0; col < this._charWidth; col++) {
        const _x = ((this._pixelSpace + this._pixelSize) * col) + this._pixelSpace + x
        positions[row + 1][col + 1] = {
          coord: {
            row: row + 1,
            col: col + 1,
          },
          x: _x,
          y: _y,
        }
      }
    }

    return positions
  },

  _getCharsPositions() {
    const positions = []

    for (let row = 1; row <= this._rows; row++) {
      positions[row] = []
      for (let col = 1; col <= this._cols; col++) {
        const { x, y } = this._getCharCoord(row, col)
        const matrix = this._getCharMatrix(x, y)
        positions[row][col] = {
          coord: {
            row,
            col,
          },
          x,
          y,
          matrix,
        }
      }
    }

    return positions
  },

  _refreshSize() {
    this._height = (this._charHeight * this._pixelSize) + ((this._charHeight + 1) * this._pixelSpace)
    this._width = (this._charWidth * this._pixelSize) + ((this._charWidth + 1) * this._pixelSpace)

    this._canvas.width = this._width * this._cols + this._padding
    this._canvas.height = this._height * this._rows + this._padding

    this._positions = this._getCharsPositions()
  },

  _drawComponent() {
    this._refreshSize()

    // Draw backgroud
    this._context.fillStyle = this._backgroundColor
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height)

    this._positions.forEach(row => {
      row.forEach(char => {
         this._drawBaseChar(char)
      })
    })
  },

  _getCharCoord(row, col) {
    const x = ((col - 1) * this._width) + (this._padding / 2 | 0)
    const y = ((row - 1) * this._height) + (this._padding / 2 | 0)

    return {
      x, y
    }
  },

  _getCharFromText(row, col) {
    return characters['1']
    /*
    const rows = []

    for (let row = 1; col < this._rows; row++) {
      rows[row] = []
      for (let col = 1; col < this._cols; col++) {
        rows[row].push(' ')
      }
    }


    let start = 0
    while (start < this._text.length) {
      rows.push(this._text.slice(start, start + this._cols))
      start += this._cols
    }

    */
  },

  _drawBaseChar(char) {
    const { x, y, coord, matrix } = char

    // Draw background
    this._context.fillStyle = this._backgroundColor
    this._context.fillRect(x, y, this._width, this._height)

    const digit = this._getCharFromText(coord.row, coord.col)

    matrix.forEach(row => {
      row.forEach(dot => {
        let color = this._dotOff
        if (digit[dot.coord.row-1] && (digit[dot.coord.row-1][dot.coord.col] == 1)) {
          color = this._dotOn
        }

        this._context.fillStyle = color

        this._context.fillRect(dot.x, dot.y, this._pixelSize, this._pixelSize)
      })
    })
  }
}

export {
    Alphanumeric
}
