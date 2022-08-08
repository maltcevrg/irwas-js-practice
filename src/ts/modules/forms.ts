const forms = () => {
  const form = document.querySelectorAll<HTMLFormElement>("form"),
        input = document.querySelectorAll<HTMLInputElement>("input"),
        phoneInput = document.querySelectorAll<HTMLInputElement>('input[name="user_phone"]')
    // Валидация номера
    phoneInput.forEach(item =>{
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/\D/,'')
            console.log(typeof item.value);
        })
    })
  // Сообщения о действиях в форме
  const message = {
    loading: "Грузится",
    success: "Спс, отправил",
    fail: "Всё сломалось",
  }
  //Отправка данных
  const postData = async (url?:string, data?:string) => {
    document.querySelector(".status").textContent = message.loading
    let result = await fetch(url, {
      method: "POST",
      body: data,
    })
    return await result.text()
  }
  //   Очистка инпутов
  const clear = () => {
    input.forEach((item) => {
      item.value = ""
    })
  }

  // Вывод сообщения о действии посредством создания нового div
  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault()
      let status = document.createElement("div")
      status.classList.add("status")
      item.appendChild(status)

      //Сбор данных с формы
      const formData = new FormData(item)

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
            setTimeout(() =>{
                status.remove()
            },3000)
        })
    })
  })
}

export default forms
