export const modals = () => {
  const bindModal = (
    triggerSelector: string,
    modalSelector: string,
    closeSelector: string,
    closeClickOverlay: boolean = true
  ) => {
    const triggers = document.querySelectorAll<HTMLElement>(triggerSelector),
      modal = document.querySelector<HTMLElement>(modalSelector),
      close = document.querySelector<HTMLElement>(closeSelector),
      windows = document.querySelectorAll<HTMLElement>("[data-popup]")
    triggers.forEach((item) => {
      item.addEventListener("click", (e: Event) => {
        if (e.target) {
          e.preventDefault
        }
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
      })
    })

    const closeModal = () => {
      windows.forEach((item) => {
        item.style.display = "none"
        document.body.style.overflow = ""
      })
      console.log("all popups close")
    }
    close.addEventListener("click", () => {
      closeModal()
    })
    modal.addEventListener("click", (e: Event) => {
      if (e.target === modal && closeClickOverlay) {
        closeModal()
      }
    })
    document.addEventListener("keydown", (e) => {
      let key = e.keyCode
      if (key === 27) {
        closeModal()
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
    ".popup_engineer .popup_close",
    false
  )
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close", false)
  bindModal(".phone_link", ".popup", ".popup .popup_close", true)
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false)
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false)
  // showModalByTime('.popup',6000)
}
