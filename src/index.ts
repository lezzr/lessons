import { renderSearchFormBlock } from './search-form.js'
import {renderSearchResultsBlock, renderSearchStubBlock} from './search-results.js'
import { renderUserBlock, userStorageService, favouritesStorageService } from './user.js'
import { renderToast } from './lib.js'






const dateNow = new Date()


// type userData = {
//   userName: unknown
//   userAvatar: unknown
//   favouriteItemAmount?: unknown
//
// }
// const userData = {
//   userName: 'Wade Warren',
//   userAvatar: './img/avatar.png',
//   favouriteItemAmount: 3
// }
// localStorage.setItem('userData', JSON.stringify(userData))
// const getUserData = JSON.parse(localStorage.getItem('userData'))
// console.log(getUserData.userName)

// const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
const dateStringNow = dateNow
  .toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })
  .split('.')
  .reverse()
  .join('-')
// console.log(dateStringNow, typeof dateStringNow)
const dateLate = dateNow.setMonth(dateNow.getMonth()+ 1)
const dateDayPlusOne = dateNow.setDate(dateNow.getDate()+ 1)
const dateNowMax = dateNow.setDate(dateNow.getDate()+ 29)
const dateLateMax = dateNow.setMonth(dateNow.getMonth()+ 2)
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
const dateStringLateMax = new Intl.DateTimeFormat()
  .format(dateLateMax)
  .toString()
  .split('.')
  .reverse()
  .join('-')
const dateStringNowMax = new Intl.DateTimeFormat()
  .format(dateNowMax)
  .toString()
  .split('.')
  .reverse()
  .join('-')
const dateStringDayPlusOne = new Intl.DateTimeFormat()
  .format(dateDayPlusOne)
  .toString()
  .split('.')
  .reverse()
  .join('-')
// console.log(typeof dateStringLate, dateStringLate)

// let data;

// fetch('http://localhost:3100/places')
//   .then(r => r.json())
//   .then(console.log)

window.addEventListener('DOMContentLoaded', () => {
  let userData = userStorageService.getUser()
  let favouritesData = favouritesStorageService.getFavouritesAmount()
  renderUserBlock(userData?.userAvatar, userData?.userName, favouritesData)
  renderSearchFormBlock(`${dateStringNow}`, `${dateStringNow}`, `${dateStringNowMax}`, `${dateStringLate}`, `${dateStringLate}`, `${dateStringLateMax}`)
  renderSearchStubBlock()
  // renderSearchResultsBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
