import { checkNumInputs } from "./checkNumInputs"
export const changeModalState = (state: any) => {
  const windowForm =
  document.querySelectorAll<HTMLElement>(".balcon_icons_img"),
  windowWidth = document.querySelectorAll<HTMLElement>("#width"),
  windowHeight = document.querySelectorAll<HTMLElement>("#height"),
  windowProfile = document.querySelectorAll<HTMLElement>(".checkbox"),
  windowType = document.querySelectorAll<HTMLElement>("#view_type")
  
  checkNumInputs("#width")
  checkNumInputs("#height")
  
  const bindActionToElements = (
    event: string,
    elements: NodeListOf<HTMLElement>,
    prop: string
  ) => {
    elements.forEach((element: any, i: number) => {
      element.addEventListener(event, () => {
        switch (element.nodeName) {
          case "SPAN":
            state[prop] = i
            break
          case "INPUT":
            if (element.getAttribute("type") === "checkbox") {
              state[prop] = i === 0 ? "Cold" : "Hot"
              element.forEach((box: any, j: number) => {
                box.checked = false
                if (i === j) {
                  box.checked = true
                }
              })
            } else {
              state[prop] = element.value
            }
            break
          case "SELECT":
            state[prop] = element.value
            break
        }
        console.log(state)
      })
    })
  }
  bindActionToElements("click", windowForm, "form")
  bindActionToElements("input", windowHeight, "height")
  bindActionToElements("input", windowWidth, "width")
  bindActionToElements("change", windowProfile, "profile")
  bindActionToElements("change", windowType, "type")
}
