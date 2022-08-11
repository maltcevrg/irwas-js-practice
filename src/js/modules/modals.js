export const modals = () => {
  // const modal = {
  //   triggers: document.querySelectorAll(triggerSelector),
  //   modal: document.querySelector(modalSelector),
  //   close: document.querySelector(closeSelector),
  // }
  const bindModal = (triggerSelector, modalSelector, closeSelector) => {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector)
    triggers.forEach((item) => {
      item.addEventListener("click", (e) => {
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
    modal.addEventListener("click", (e) => {
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
  // showModalByTime(".popup", 6000)
}
