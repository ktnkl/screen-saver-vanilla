const hrsSpan = document.getElementById('hrs')
const minSpan = document.getElementById('min')
const secSpan = document.getElementById('sec')
const dateSpan = document.getElementById('date')
const monthSpan = document.getElementById('month')
const yearSpan = document.getElementById('year')
const secHand = document.getElementById('sec_hand')
const minHand = document.getElementById('min_hand')
const hrsHand = document.getElementById('hrs_hand')

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

const addNullToTime = (time) => {
  switch (time) {
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
      return time    
  }
}

const timerHandler = () => {
  const date = new Date()

  hrsSpan.innerHTML = date.getHours()
  minSpan.innerHTML = addNullToTime(date.getMinutes())
  secSpan.innerHTML = addNullToTime(date.getSeconds())
  dateSpan.innerHTML = date.getDate()
  monthSpan.innerHTML = getMonthName(date.getMonth())
  yearSpan.innerHTML = date.getFullYear()

  h = 30 * (date.getHours() % 12 + date.getMinutes() / 60); 
  m = 6 * date.getMinutes();
  s = 6 * date.getSeconds();
  secHand.style.cssText = `transform: rotate(${s}deg);`
  minHand.style.cssText = `transform: rotate(${m}deg);`
  hrsHand.style.cssText = `transform: rotate(${h}deg);`
}

window.setInterval(timerHandler, 1000)

