class UI_InputRange {
  constructor() {
    ROOT_UI_INPUTRANGE = document.getElementById('inputRange')
    this.maxValue = 50000
  }

  changeInput() {
    let input = ROOT_UI_INPUTRANGE.querySelector('.input-range > input')
    let val = (input.value * 100) / this.maxValue
    console.log(val);
    input.style.background = `
      -webkit-linear-gradient(
        left,
        var(--color-light-pink) 0%,
        var(--color-pink) ${val}%,
        var(--color-gray) ${val}%)
    `
  }

  render() {
    let htmlInput = `
          <span>0 ₽</span>
          <input type="range" min="0" max="50000" step="1" value="0" oninput="ui_inputRange.changeInput()">
          <span>${this.maxValue} ₽</span>
      `

    ROOT_UI_INPUTRANGE.innerHTML = htmlInput
  }
}

const ui_inputRange = new UI_InputRange()
ui_inputRange.render()