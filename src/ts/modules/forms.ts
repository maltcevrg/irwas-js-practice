import { checkNumInputs } from "./checkNumInputs"

export const forms = (state?: any) => {
  const forms = document.querySelectorAll<HTMLFormElement>("form"),
    input = document.querySelectorAll<HTMLInputElement>("input")

  // Валидация номера
  checkNumInputs('input[name="user_phone"]')
  // Сообщения о действиях в форме
  const message = {
    loading: "Грузится",
    success: "Спс, отправил",
    fail: "Всё сломалось",
  }
  //Отправка данных
  const postData = async (url?: string, data?: string) => {
    document.querySelector(".status").textContent = message.loading
    const result = await fetch(url, {
      method: "POST",
      body: data,
    })
    return await result.text()
  }
  //   Очистка инпутов
  const clear = () => {
    input.forEach((input) => (input.value = ""))
  }

  // Вывод сообщения о действии посредством создания нового div
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const status = document.createElement("div")
      status.classList.add("status")
      form.append(status)

      //Сбор данных с формы
      const formData = new FormData(form)
      if (form.getAttribute("data-calc") === "end") {
        for (const key in state) {
          formData.append(key, state[key])
          console.log(formData)
          console.log(typeof state)
        }
      }

      //Отправка данных на фейк сервер
      postData("assets/server.php")
        .then((res) => {
          console.log(res)
          status.textContent = message.loading
        })
        .catch(() => {
          status.textContent = message.fail
        })
        .finally(() => {
          clear()
          status.textContent = message.success
          setTimeout(() => {
            status.remove()
          }, 3000)
        })
    })
  })
}
