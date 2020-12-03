class Banner {
  render() {
    let htmlText = `
        <div class="banner__info">
          <p class="banner__text">Как начать инвестировать?</p>
          <a class="banner__button" target="_blank" href="https://alfabank.ru/make-money/investments/">Узнать</a>
        </div>
      `

    ROOT_BANNER.innerHTML = htmlText
  }
}

const banner = new Banner()