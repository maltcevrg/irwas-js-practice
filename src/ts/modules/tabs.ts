const tabs = (
  headerSelector: string,
  tabSelector: string,
  contentSelector: string,
  activeClass: string
) => {
  const header = document.querySelector<HTMLElement>(headerSelector),
    tab = document.querySelectorAll<HTMLElement>(tabSelector),
    content = document.querySelectorAll<HTMLElement>(contentSelector)

  const hideContent = () => {
    content.forEach((item) => {
      item.style.display = "none"
    })
    tab.forEach((item) => {
      item.classList.remove(activeClass)
    })
  }

  const showContent = (i: number = 0) => {
    content[i].style.display = "block"
    tab[i].classList.add(activeClass)
  }
  hideContent()
  showContent()

  header.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLElement
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentElement.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i: number) => {
        if (target == item || target.parentNode == item) {
          hideContent()
          showContent(i)
        }
      })
    }
  })
}
export default tabs
