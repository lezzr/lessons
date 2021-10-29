import { renderBlock } from './lib.js'


export interface SearchFormData{
  dateIn: string

  dateOut:string


  maxPay: unknown
  // searchHandler(dateIn: string, dateOut: string, maxPay: unknown): void
}

export interface Place{}

// let searchData: SearchFormData = {
//   // dateIn: (document.getElementById('check-in-date') as HTMLInputElement).value,
//   // dateIn: document.getElementById('check-in-date').nodeValue,
//   // dateOut: (document.getElementById('check-in-date') as HTMLInputElement).value,
//   // maxPay: (document.getElementById('check-in-date') as HTMLInputElement).value,
//   dateIn: '2021-11-24',
//   dateOut: '2021-12-24',
//   maxPay: 300,
//
//
// }
// function searchHandler(searchData: SearchFormData)  {
//   console.log(searchData)
// }


export function renderSearchFormBlock (dateIn: string, dateInMin: string, dateInMax: string, dateOut: string, dateOutMin: string, dateOutMax: string) {
  renderBlock(

    'search-form-block',
    `
    <form id="search-form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div> --!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dateIn}" min="${dateInMin}" max="${dateInMax}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateOut}" min="${dateOutMin}" max="${dateOutMax}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="searchButton">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    <div><button id="searchButton2">Найти222</button></div>
    `
  )

}

export function getSearchFormData(): SearchFormData{
  const formData = new FormData(document.querySelector('#search-form'))

  return {
    dateIn: formData.get('checkin') as string,
    dateOut: formData.get('checkout') as string,
    maxPay: formData.get('price') as string
  }

}

export function search (SearchFormData: SearchFormData, cb: (err: Error, result: Place[])=>{}) {
  console.log(getSearchFormData())

  if (Math.random() < 0.5){
    cb(new Error, null)
  } else {
    cb(null, [])
  }
}

// function trySearch(){
//   console.log('trySearch')
// }
//
//
//
// export function search (SearchFormData: SearchFormData) {
//   console.log(SearchFormData)
// }
// const searchButton = document.getElementById('searchButton2')
// if (searchButton != null){
//  searchButton.onclick = ()=>{
//    console.log(123)
//  }
// }
