export const checkNumInputs = (selector: string) => {
  const numInputs = document.querySelectorAll<HTMLInputElement>(selector)

  numInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/, "")
      console.log(input.value)
    })
  })
}
