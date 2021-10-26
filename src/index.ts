import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
const dateNow = new Date()
// const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
const dateStringNow = dateNow
  .toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })
  .split('.')
  .reverse()
  .join('-')
// console.log(dateStringNow, typeof dateStringNow)
const dateLate = dateNow.setMonth(dateNow.getMonth()+ 1)
  // .toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })
// const dateLateString = dateLate.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })
// console.log(dateLate, typeof dateLate)
// console.log(new Intl.DateTimeFormat().format(dateLate))
const dateStringLate = new Intl.DateTimeFormat()
  .format(dateLate)
  .toString()
  .split('.')
  .reverse()
  .join('-')
// console.log(typeof dateStringLate, dateStringLate)

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(0, 'Wade Warren', './img/avatar.png')
  renderSearchFormBlock(`${dateStringNow}`, `${dateStringLate}`)
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
