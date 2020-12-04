class SelfSaving {
  constructor() {
    this.percentDeposit = 6.98
    this.percentAlfa = 71.21 / 3
    this.years = 3
    this.coinWidth = 55
    this.popupWidth = 300
    this.coinStep = this.calcBenefit(this.percentAlfa, ui_inputRange.maxValue) / 10
    window.addEventListener('resize', this.setPopupSize);
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
        <div class="self-savings__help-text">
          если складывать под матрас 
          <div class="self-savings__help-text-popup-block">
          <img class="self-savings__help-text-img" src="img/question.svg" tabindex="0">
          <div class="self-savings__help-text-popup-point">
            <div class="self-savings__help-text-popup">
              <span>В этом мало смысла — такие 
              накопления «съедает» инфляция</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      `

    let depositCoinsHtml = this.getHtmlCoins(depositCoinCount)
    let depositHtml = `
      <div class="self-savings__block">
      <div class="self-savings__coins">${depositCoinsHtml}</div>
      <p class="accent self-savings__cost">~${prettify(depositBenefit.toFixed())} ₽</p>
      <div class="self-savings__help-text">
        если откладывать на депозит 
        <div class="self-savings__help-text-popup-block">
          <img class="self-savings__help-text-img" src="img/question.svg" tabindex="0">
          <div class="self-savings__help-text-popup-point">
            <div class="self-savings__help-text-popup">
              <span>Ставки по вкладам различны в разных
              банках и зависят от многих факторов, 
              в частности, от <a target="_blank" href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#1">
              ключевой ставки Центрального банка РФ¹.</a></span>
            </div>
          </div>
        </div>
      </div>
      </div>
      `

    let alfaCoinsHtml = this.getHtmlCoins(alfaCoinCount)
    let alfaHtml = `
      <div class="self-savings__block">
      <div class="self-savings__coins">${alfaCoinsHtml}</div>
      <p class="accent self-savings__cost">до ~${prettify(alfaBenefit.toFixed())} ₽</p>
      <div class="self-savings__help-text self-savings__help-text-alfa">
        если инвестировать в ПИФ
        «Альфа-Капитала» 
        <div class="self-savings__help-text-popup-block">
          <img class="self-savings__help-text-img" src="img/question.svg" tabindex="0">
          <div class="self-savings__help-text-popup-point">
            <div class="self-savings__help-text-popup">
              <span>Вы становитесь инвестором набора 
              компаний, который определяют 
              профессиональные управляющие. 
              Они решают, когда покупать
              и продавать ценные бумаги, чтобы
              обеспечить инвестиционный доход. 
              <a target="_blank" href="https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#2">
              Купить или продать паи фонда можно
              в любой момент²</a></span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      `

    let forecastHtml = `
      <div class="self-savings__forecast">
        ${mineHtml + depositHtml + alfaHtml}
      </div>
    `

    ROOT_SELFSAVINGS.innerHTML = htmlText + forecastHtml
    this.setPopupSize()
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

  setPopupSize() {
    let popupPoints = document.getElementsByClassName('self-savings__help-text-popup-point')
    let infoWidth = ROOT_INFO.clientWidth
    let infoRightEnd = ROOT_INFO.getBoundingClientRect().right
    let maxPopupWidth = infoWidth > 400 ? (infoWidth / 2) - 56 : infoWidth

    Array.from(popupPoints).forEach(popupPoint => {
      let popup = popupPoint.querySelector('.self-savings__help-text-popup')
      let popupWidth = maxPopupWidth < selfSaving.popupWidth ? maxPopupWidth - 10 : this.popupWidth
      popup.style.width = `${popupWidth}px`

      let popupPointRightEnd = popupPoint.getBoundingClientRect().right
      let popupRightEnd = popupPointRightEnd + popupWidth

      if (popupRightEnd > infoRightEnd) {
        popup.style.left = `-${30 + (popupRightEnd - infoRightEnd)}px`
      } else {
        popup.style.left = '-30px'
      }
    })
  }
}

const selfSaving = new SelfSaving()