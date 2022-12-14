export const images = () => {
  const imgPopup = document.createElement("div"),
  workSections = document.querySelector(".works"),
  bigImg = document.createElement("img")
  imgPopup.classList.add("popup")
  workSections.append(imgPopup)
  imgPopup.style.justifyContent = "center"
  imgPopup.style.alignItems = "center"
  imgPopup.style.display = "none"
  imgPopup.append(bigImg)

  workSections.addEventListener("click", (event: Event) => {
    event.preventDefault()
    const target = event.target as HTMLElement
    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex"
      const path = target.parentElement.getAttribute("href")
      bigImg.setAttribute("src", path)
    }
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none"
    }
  })
}
