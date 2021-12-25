import { renderSearchFormBlock, initSortSelect } from './search-form.js'
import {renderSearchResultsBlock, renderSearchStubBlock} from './search-results.js'
import { renderUserBlock, userStorageService, favouritesStorageService } from './user.js'
import {renderBlock2, renderToast} from './lib.js'






const dateNow = new Date()



const dateStringNow = dateNow
  .toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })
  .split('.')
  .reverse()
  .join('-')

const dateLate = dateNow.setMonth(dateNow.getMonth()+ 1)
const dateDayPlusOne = dateNow.setDate(dateNow.getDate()+ 1)
const dateNowMax = dateNow.setDate(dateNow.getDate()+ 29)
const dateLateMax = dateNow.setMonth(dateNow.getMonth()+ 2)

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

function renderSort(){
  renderBlock2(
    'sort-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select id="select-options">
                <option value="price/ask" selected="">Сначала дешёвые</option>
                <option value="price/desk" selected="">Сначала дорогие</option>
                <option value="distance/ask">Сначала ближе</option>
            </select>
        </div>
    </div>
    `
  )
}

window.addEventListener('DOMContentLoaded', () => {
  let userData = userStorageService.getUser()
  let favouritesData = favouritesStorageService.getFavouritesAmount()
  renderUserBlock(userData?.userAvatar, userData?.userName, favouritesData)
  renderSearchFormBlock(`${dateStringNow}`, `${dateStringNow}`, `${dateStringNowMax}`, `${dateStringLate}`, `${dateStringLate}`, `${dateStringLateMax}`)
  renderSearchStubBlock()
  renderSort()



  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
