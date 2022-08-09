export const modals = () => {
  let modal = [
    {
      triggers: document.querySelectorAll(triggerSelector),
      modal: document.querySelector(modal.modalSelector),
      close: document.querySelector(modal.closeSelector),
    },
  ]
  const bindModal = (modal) => {
    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault
        }
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
      })
    })
    const close = () => {
      modal.style.display = "none"
      document.body.style.overflow = ""
    }
    close.addEventListener("click", () => {
      close()
    })
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        close()
      }
    })
  }
  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = "block"
      document.body.style.overflow = "hidden"
    }, time)
  }
  bindModal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  )

  bindModal(".phone_link", ".popup", ".popup .popup_close")
  showModalByTime(".popup", 6000)
}
