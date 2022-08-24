export const timer = (id: string, deadline: string) => {
  const timeRemaining = (endtime: string) => {
    const t: number = Date.parse(endtime) - Date.parse(String(new Date())),
      sec: number = Math.floor((t / 1000) % 60),
      min: number = Math.floor((t / 1000 / 60) % 60),
      hours: number = Math.floor((t / (1000 * 60 * 60)) % 24),
      days: number = Math.floor(t / (1000 * 60 * 60 * 24))
    return {
      total: t,
      days: days,
      sec: sec,
      min: min,
      hours: hours,
    }
  }
  const setClock = (selector: string, endtime: string) => {
    const timer = document.querySelector(selector),
      days = document.querySelector("#days"),
      sec = document.querySelector("#seconds"),
      min = document.querySelector("#minutes"),
      hours = document.querySelector("#hours")
    const updateClock = () => {
      const t = timeRemaining(endtime)
      days.textContent = String(addZero(t.days))
      sec.textContent = String(addZero(t.sec))
      min.textContent = String(addZero(t.min))
      hours.textContent = String(addZero(t.hours))
      if (t.total <= 0) {
        days.textContent = "00"
        sec.textContent = "00"
        min.textContent = "00"
        hours.textContent = "00"
        clearInterval(timeInterval)
      }
    }
    const timeInterval: number = setInterval(updateClock, 1000)
    const addZero = (number: number) => {
      if (number <= 9) {
        return "0" + number
      } else {
        return number
      }
    }
  }

  setClock(id, deadline)
}
