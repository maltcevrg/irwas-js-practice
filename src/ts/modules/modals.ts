const modals = () => {
  const bindModal = (
    triggerSelector: string,
    modalSelector: string,
    closeSelector: string
  ) => {
    const triggers = document.querySelectorAll<HTMLElement>(triggerSelector),
      modal = document.querySelector<HTMLElement>(modalSelector),
      close = document.querySelector<HTMLElement>(closeSelector)
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
      modal.style.display = "none"
      document.body.style.overflow = ""
    }
    close.addEventListener("click", () => {
      closeModal()
    })
    modal.addEventListener("click", (e: Event) => {
      if (e.target === modal) {
        closeModal()
      }
    })
    document.addEventListener("keydown", (e) => {
      let key = e.keyCode
      console.log(key);
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
    ".popup_engineer .popup_close"
  )

  bindModal(".phone_link", ".popup", ".popup .popup_close")
  // showModalByTime('.popup',6000)
}

export default modals
