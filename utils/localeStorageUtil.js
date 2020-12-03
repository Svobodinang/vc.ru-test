class LocalStorageUtil {
  constructor() {
    this.keyName = 'statistics'
  }

  getStatistic() {
    const statisticsLocalStorage = localStorage.getItem(this.keyName)
    if (statisticsLocalStorage !== null) {
      return JSON.parse(statisticsLocalStorage)
    }
    return []
  }

  updateStatistic(summ) {
    let statistics = this.getStatistic()
    statistics.push(summ)
    localStorage.setItem(this.keyName, JSON.stringify(statistics))
  }
}

const localStorageUtil = new LocalStorageUtil()