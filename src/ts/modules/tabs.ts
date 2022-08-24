export const tabs = (
  headerSelector: string,
  tabSelector: string,
  contentSelector: string,
  activeClass: string,
  display: string = "block"
) => {
  const header = document.querySelector<HTMLElement>(headerSelector),
    tabs = document.querySelectorAll<HTMLElement>(tabSelector),
    content = document.querySelectorAll<HTMLElement>(contentSelector)

  const hideContent = () => {
    content.forEach((contentItem) => {
      contentItem.style.display = "none"
    })
    tabs.forEach((contentItem) => {
      contentItem.classList.remove(activeClass)
    })
  }

  const showContent = (i: number = 0) => {
    content[i].style.display = display
    tabs[i].classList.add(activeClass)
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
      tabs.forEach((item, i: number) => {
        if (target == item || target.parentNode == item) {
          hideContent()
          showContent(i)
        }
      })
    }
  })
}
