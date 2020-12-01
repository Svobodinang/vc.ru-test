class UI_InputRange {
  render() {
    let htmlInput = `
          <span>0 ₽</span>
          <input type="range" min="0" max="50000" step="1" value="0">
          <span>50 000 ₽</span>
      `

    ROOT_UI_INPUTRANGE = document.getElementById('inputRange')
    ROOT_UI_INPUTRANGE.innerHTML = htmlInput
  }
}

const ui_inputRange = new UI_InputRange()
ui_inputRange.render()