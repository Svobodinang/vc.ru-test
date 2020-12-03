class Statistics {
  constructor() {
    this.open = false
  }
  render() {
    let infoHtml = `
      <div id="statisticContent" class="statistic-content"></div>
      <div id="statisticTitle" class="statistic-title"></div>
    `

    ROOT_STATISTICS.innerHTML = infoHtml

    ROOT_STATISTICSCONTENT = ROOT_STATISTICSCONTENT || document.getElementById('statisticContent')
    ROOT_STATISTICSTITLE = ROOT_STATISTICSTITLE || document.getElementById('statisticTitle')
  }

  rerender() {
    statisticsTitle.render()
    statisticsContent.render()
  }
}

const statistics = new Statistics()
statistics.render()