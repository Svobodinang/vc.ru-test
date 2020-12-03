class SelfSaving {
  constructor() {
    this.percentDeposit = 6.98
    this.percentAlfa = 71.21 / 3
    this.years = 3
    this.coinWidth = 55
    this.coinStep = this.calcBenefit(this.percentAlfa, ui_inputRange.maxValue) / 10
  }
  render() {
    ROOT_SELFSAVINGS.style.display = 'block'

    let htmlText = `
        <h2 class="self-savings__title">Вы откладываете ${prettify(ui_inputRange.cost)} ₽ в месяц.<br>
        За три года вы бы заработали:</h2>
      `

    let mineBenefit = ui_inputRange.cost * this.years * 12
    let depositBenefit = this.calcBenefit(this.percentDeposit, ui_inputRange.cost)
    let alfaBenefit = this.calcBenefit(this.percentAlfa, ui_inputRange.cost)

    let mineCoinCount = Math.ceil(mineBenefit / this.coinStep)
    let depositCoinCount = Math.ceil(depositBenefit / this.coinStep)
    let alfaCoinCount = Math.ceil(alfaBenefit / this.coinStep)


    let mineCoinsHtml = this.getHtmlCoins(mineCoinCount)
    let mineHtml = `
      <div class="self-savings__block">
      <div class="self-savings__coins">${mineCoinsHtml}</div>
      <p class="accent self-savings__cost">~${prettify(mineBenefit.toFixed())} ₽</p>
      <p class="self-savings__help-text">если складывать под матрас <img src="img/question.svg"></p>
      </div>
      `

    let depositCoinsHtml = this.getHtmlCoins(depositCoinCount)
    let depositHtml = `
      <div class="self-savings__block">
      <div class="self-savings__coins">${depositCoinsHtml}</div>
      <p class="accent self-savings__cost">~${prettify(depositBenefit.toFixed())} ₽</p>
      <p class="self-savings__help-text">если откладывать на депозит <img src="img/question.svg"></p>
      </div>
      `

    let alfaCoinsHtml = this.getHtmlCoins(alfaCoinCount)
    let alfaHtml = `
      <div class="self-savings__block">
      <div class="self-savings__coins">${alfaCoinsHtml}</div>
      <p class="accent self-savings__cost">~${prettify(alfaBenefit.toFixed())} ₽</p>
      <p class="self-savings__help-text">если инвестировать в ПИФ
      «Альфа-Капитала» <img src="img/question.svg"></p>
      </div>
      `

    let forecastHtml = `
      <div class="self-savings__forecast">
        ${mineHtml + depositHtml + alfaHtml}
      </div>
    `

    ROOT_SELFSAVINGS.innerHTML = htmlText + forecastHtml
  }

  calcBenefit(percent, summ) {
    let nextSumm = 0
    for (let i = 0; i < +this.years; i++) {
      nextSumm += summ * 12
      let benefit = nextSumm * (percent / 100)
      nextSumm += benefit
    }
    return nextSumm
  }

  getHtmlCoins(count) {
    let html = ``
    for (let i = 0; i < count; i++) {
      html += `
      <img 
        class="self-savings__coin" 
        src="img/money.svg" 
        style="margin-left: -${Boolean(i) * this.coinWidth * 0.8}px"
      >
      `
    }
    return html
  }
}

const selfSaving = new SelfSaving()