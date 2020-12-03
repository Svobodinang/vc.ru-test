class Info {
  render() {
    let infoHtml = `
      <div id="selfSavings" class="self-savings"></div>
      <div id="statistics" class="statistics"></div>
      <div id="banner" class="banner"></div>
    `

    ROOT_INFO.innerHTML = infoHtml

    ROOT_SELFSAVINGS = ROOT_SELFSAVINGS || document.getElementById('selfSavings')
    ROOT_STATISTICS = ROOT_STATISTICS || document.getElementById('statistics')
    ROOT_BANNER = ROOT_BANNER || document.getElementById('banner')
  }
  rerender() {
    selfSaving.render()
    statistics.rerender()
    banner.render()

    ROOT_INFO.style.padding = '1rem 1.5rem'
    ROOT_INFO.style['max-height'] = '2000px'
    setTimeout(() => {
      ROOT_SELFSAVINGS.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 500)
  }
}

const info = new Info()
info.render()