class AmountChoice {
  render() {
    let htmlText = `
      <h2>Сколько денег вы откладываете в месяц?</h2>
      <p class="amount-choice__text">Ответьте и узнаете, сколько копят другие.</p>
    `
    let htmlInput = `
      <div id="rootInputRange" class="root-input-range"></div>
    `

    ROOT_AMOUNTCHOICE.innerHTML = htmlText + htmlInput
  }
}

const amountChoice = new AmountChoice()
amountChoice.render()