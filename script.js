const DIAMETER = document.getElementById('diameter')
const CALC_BTN = document.getElementById('calc-btn')
const AREA_ANSWER_TXT = document.getElementById('area-answer-txt')
const CIRCUMFERENCE_ANSWER_TXT = document.getElementById('circumference-answer-txt')

CALC_BTN.addEventListener('click', () => {
  const RADIUS = DIAMETER.value / 2
  const PI = Math.PI

  AREA_ANSWER_TXT.textContent = `Area: ${(PI * (RADIUS ** 2)).toFixed(3)}cm`
  CIRCUMFERENCE_ANSWER_TXT.textContent = `Circumference: ${(2 * PI * RADIUS).toFixed(3)}cm`
})
