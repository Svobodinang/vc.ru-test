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
    }, 800)
  }

  render() {
    let htmlTitle = `
          <div class="statistics__title">
            <a onclick="statisticsTitle.changeView()">${this.titleTextHtml}</a>
          </div>
        `

    ROOT_STATISTICSTITLE.innerHTML = htmlTitle
  }
}

const statisticsTitle = new StatisticsTitle()