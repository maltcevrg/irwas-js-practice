export const modals = () => {
  function bindModal(
    triggerSelector: string,
    modalSelector: string,
    closeSelector: string
  ) {
    const trigger = document.querySelectorAll<HTMLElement>(triggerSelector),
      modal = document.querySelector<HTMLElement>(modalSelector),
      close = document.querySelector<HTMLElement>(closeSelector)

    trigger.forEach((item) => {
      item.addEventListener("click", (e: Event) => {
        if (e.target) {
          e.preventDefault
        }
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
      })
    })

    close.addEventListener("click", () => {
      modal.style.display = "none"
      document.body.style.overflow = ""
    })
    modal.addEventListener("click", (e: Event) => {
      if (e.target === modal) {
        modal.style.display = "none"
        document.body.style.overflow = ""
      }
    })
  }
  function showModalByTime(selector: string, time: number) {
    setTimeout(() => {
      document.querySelector<HTMLElement>(selector).style.display = "block"
      document.body.style.overflow = "hidden"
    }, time)
  }
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  )

  bindModal(".phone_link", ".popup", ".popup .popup_close")
  // showModalByTime('.popup',6000)
}
