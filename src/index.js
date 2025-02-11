const hrsSpan = document.getElementById('hrs')
const minSpan = document.getElementById('min')
const secSpan = document.getElementById('sec')
const dateSpan = document.getElementById('date')
const monthSpan = document.getElementById('month')
const yearSpan = document.getElementById('year')

const getMonthName = (date) => {
  let names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December'
  ]
  return names[date]
}

const addNullToSeconds = (seconds) => {
  switch (seconds) {
    case 0: 
      return '00'
    case 1:
      return '01'
    case 2:
      return '02'
    case 3:
      return '03'
    case 4:
      return '04'
    case 5:
      return '05'
    case 6:
      return '06'
    case 7:
      return '07'
    case 8:
      return '08'
    case 9:
      return '09'
    default:
      return seconds    
  }
}

const timerHandler = () => {
  const date = new Date()

  hrsSpan.innerHTML = date.getHours()
  minSpan.innerHTML = date.getMinutes()
  secSpan.innerHTML = addNullToSeconds(date.getSeconds())
  dateSpan.innerHTML = date.getDate()
  monthSpan.innerHTML = getMonthName(date.getMonth())
  yearSpan.innerHTML = date.getFullYear()
}

window.setInterval(timerHandler, 1000)

