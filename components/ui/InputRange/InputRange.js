class UI_InputRange {
  constructor() {
    ROOT_UI_INPUTRANGE = document.getElementById('rootInputRange')
    this.maxValue = 50000
    this.cost = 0
  }

  changeInput() {
    const input = ROOT_UI_INPUTRANGE.querySelector('.root-input-range__input')
    let inputWidth = input.clientWidth
    const popupGroup = ROOT_UI_INPUTRANGE.querySelector('.root-input-range__popup-group')
    const popup = popupGroup.querySelector('#inputPopup')
    const thumbD = 25
    const leftTrianglePersent = 0.55

    this.cost = input.value
    let percent = (this.cost * 100) / this.maxValue
    input.style.background = `
      -webkit-linear-gradient(
        left,
        var(--color-light-pink) 0%,
        var(--color-pink) ${percent}%,
        var(--color-gray) ${percent}%)
    `

    // меняем текст popup
    popup.innerHTML = `${prettify(this.cost)} ₽`
    let popupGroupWidth = popupGroup.offsetWidth;

    // Перемещаем popup
    let px = (inputWidth - thumbD) * percent / 100
    popupGroup.style.transform = `translateX(${px}px)`;
    popupGroup.style.left = `-${(popupGroupWidth * leftTrianglePersent) - (thumbD / 2)}px`

  }

  render() {
    let htmlInput = `
          <span class="root-input-group__span">0 ₽</span>
          <div class="root-input-range__input-group">
            <input class="root-input-range__input" type="range" min="0" max="50000" step="1" value="0" oninput="ui_inputRange.changeInput()" onchange="selfSaving.render()">
            <div class="root-input-range__popup-group">
              <span class="root-input-range__popup" id="inputPopup">0 ₽</span>
            </div>
          </div>
          <span class="root-input-group__span">${prettify(this.maxValue)} ₽</span>
      `

    ROOT_UI_INPUTRANGE.innerHTML = htmlInput
  }
}

const ui_inputRange = new UI_InputRange()
ui_inputRange.render()