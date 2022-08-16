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
      windows = document.querySelectorAll<HTMLElement>("[data-popup]"),
      scroll = calcScroll()
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e: Event) => {
        if (e.target) {
          e.preventDefault
        }
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
        document.body.style.marginRight = String(scroll + "px")
      })
    })

    const closeModal = () => {
      windows.forEach((modal) => {
        modal.style.display = "none"
        document.body.style.overflow = ""
        document.body.style.marginRight = "0px"
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
      let key = e.key
      if (key === "Escape") {
        closeModal()
      }
    })
  }
  const showModalByTime = (selector: string, time: number) => {
    setTimeout(() => {
      document.querySelector<HTMLElement>(selector).style.display = "block"
      document.body.style.overflow = "hidden"
    }, time)
  }

  const calcScroll = () => {
    let div = document.createElement("div")
    div.style.width = "50px"
    div.style.height = "50px"
    div.style.overflowY = "scroll"
    div.style.visibility = "hidden"
    document.body.append(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()
    return scrollWidth
  }
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close",
    false
  )
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close", false)
  bindModal(".phone_link", ".popup", ".popup .popup_close", true)
  bindModal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  )
  bindModal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  )
  // showModalByTime('.popup',6000)
}
