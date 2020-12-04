class StatisticsContent {
  constructor() {
    this.smallSumm = 1000
    this.bigSumm = 10000
    this.radius = 55
    this.htmlMainContent = ``
  }

  changeView() {
    if (statistics.open) {
      ROOT_STATISTICSCONTENT.style['max-height'] = '1000px'
      setTimeout(() => {
        ROOT_STATISTICS.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        })
      }, 500)
    } else {
      ROOT_STATISTICSCONTENT.style['max-height'] = '0'
      setTimeout(() => {
        ROOT_STATISTICS.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        })
      }, 500)
    }
  }

  getStatisticsHtml() {
    let statistic = localStorageUtil.getStatistic()
    let meanSumm = statistic.reduce((a, b) => (a + b)) / statistic.length;

    let srcImgMeanSumm = ''
    if (meanSumm <= 10000) {
      srcImgMeanSumm = 'img/statistics/money1.svg'
    } else if (meanSumm <= 20000) {
      srcImgMeanSumm = 'img/statistics/money2.svg'
    } else if (meanSumm <= 30000) {
      srcImgMeanSumm = 'img/statistics/money3.svg'
    } else if (meanSumm <= 40000) {
      srcImgMeanSumm = 'img/statistics/money4.svg'
    } else {
      srcImgMeanSumm = 'img/statistics/money5.svg'
    }

    // Длина окружности
    let l = 2 * 3.14 * this.radius
    let smallSummPercent = (statistic.filter(s => s > this.smallSumm).length * 100 / statistic.length).toFixed()
    let smallDashoffsetValue = l - (l * smallSummPercent / 100)

    let diagramSmallSumm = `
      <svg class="statistics__diagram" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="${this.radius}" stroke="white" stroke-width="15"/>
        <circle cx="75" cy="75" r="${this.radius}" stroke="var(--color-pink)" stroke-width="30" stroke-dasharray="${l}" stroke-dashoffset="${smallDashoffsetValue}"/>
      </svg>
      `

    let bigSummPercent = (statistic.filter(s => s > this.bigSumm).length * 100 / statistic.length).toFixed()
    let bigDashoffsetValue = l - (l * bigSummPercent / 100)
    let diagramBigSumm = `
      <svg class="statistics__diagram" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="${this.radius}" stroke="white" stroke-width="15"/>
        <circle cx="75" cy="75" r="${this.radius}" stroke="var(--color-pink)" stroke-width="30" stroke-dasharray="${l}" stroke-dashoffset="${bigDashoffsetValue}"/>
      </svg>
      `

    let statisticsHtml = `
        <div class="statistics__mean">
          <div class="statistics__mean-summ">
            <img src="${srcImgMeanSumm}">
            <p>~${prettify(meanSumm.toFixed())} ₽</p>
          </div>
          <p>в среднем откладывают читатели vc.ru</p>
        </div>
  
        <div class="statisctics__percents">
          <div class="statistics__percent-block">
            ${diagramSmallSumm}
            <p class="statistics__percents-title">${smallSummPercent}%</p>
            <p class="statistics__percents-text">читателей откладывают
            больше ${prettify(this.smallSumm)} ₽ в месяц</p>
          </div>
          <div class="statistics__percent-block">
            ${diagramBigSumm}
            <p class="statistics__percents-title">${bigSummPercent}%</p>
            <p class="statistics__percents-text">читателей откладывают
            больше ${prettify(this.bigSumm)} ₽ в месяц</p>
          </div>
        </div>
      `

    return statisticsHtml
  }

  render() {
    if (statistics.open) {
      this.htmlMainContent = this.getStatisticsHtml()
    }

    ROOT_STATISTICSCONTENT.innerHTML = this.htmlMainContent
  }
}

const statisticsContent = new StatisticsContent()