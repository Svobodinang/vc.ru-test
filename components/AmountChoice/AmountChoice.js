class AmountChoice {
  render() {
    let htmlText = `
      <h2>Сколько денег вы откладываете в месяц?</h2>
      <p>Ответьте и узнаете, сколько копят другие.</p>
    `
    let htmlInput = `
      <div id="inputRange" class="input-range"></div>
    `

    ROOT_AMOUNTCHOICE.innerHTML = htmlText + htmlInput
  }
}

const amountChoice = new AmountChoice()
amountChoice.render()