class StatisticsTitle {
  constructor() {
    this.titleTextHtml = `
        А как в среднем у читателей vc.ru? <img src="img/arrow-down.svg">
      `
  }

  changeView() {
    if (!statistics.open) {
      this.titleTextHtml = `
          Свернуть <img src="img/arrow-down.svg" style="transform: rotate(180deg);">
        `
    } else {
      this.titleTextHtml = `
          А как в среднем у читателей vc.ru? <img src="img/arrow-down.svg">
        `
    }

    statistics.open = !statistics.open
    statisticsContent.render()
    statisticsContent.changeView()
    setTimeout(() => {
      this.render()
    }, 300)
  }

  render() {
    let htmlTitle = `
          <div onclick="statisticsTitle.changeView()" class="statistics__title">
            <a>${this.titleTextHtml}</a>
          </div>
        `

    ROOT_STATISTICSTITLE.innerHTML = htmlTitle
  }
}

const statisticsTitle = new StatisticsTitle()