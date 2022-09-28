import {renderBlock, renderBlock2} from './lib.js'
import {favourites, getFavouritesAmountData} from "./user.js";

// import {renderSearchResultsBlock, renderSearchResultsBlock2} from "./search-results.js";
// let dbData;
// fetch('http://localhost:3100/places')
//   .then(r => r.json())
//   .then(r => dbData = r)
//   .then(()=>{
//     console.log(dbData.entries)


export interface SearchFormData{
  dateIn: string
  dateOut:string
  maxPay: unknown
  // searchHandler(dateIn: string, dateOut: string, maxPay: unknown): void
}

export interface Place{
    id: number
    name: string
    description: string
    image: string
    remoteness: number
    bookedDates: string[]
    price: number
}

let dbData:Place

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
                      <div><button id="searchButton2">Найти22</button></div>
    `
  )

  const searchButton = document.getElementById('searchButton2')
  if (searchButton != null){
        searchButton.onclick = ()=>{
      search(getSearchFormData())
      console.log(dbData)
    }
  }

}


export function getSearchFormData(): SearchFormData{
  const formData = new FormData(document.querySelector('#search-form'))


  return {
    dateIn: formData.get('checkin') as string,
    dateOut: formData.get('checkout') as string,
    maxPay: formData.get('price') as string
  }

}




export function search(getSearchFormData: SearchFormData){
  let db
  let dbA = []
    fetch('http://localhost:3100/places')
    .then(r => r.json())
    .then(r => db = r)
    .then(()=>{
      Object.keys(db).forEach(function (key){
        dbA.push(db[key])
      })
      console.log(dbA)
    })
    .then(()=>{
      // console.log(dbA.filter(el => el.price >= getSearchFormData.maxPay))
      // dbA
      //   .filter(el => el.price >= getSearchFormData.maxPay)
      let filtered = dbA
        .filter(el => el.price >= getSearchFormData.maxPay)
      // console.log(filtered, 'filtered')
      // document.getElementById('search-results-block').innerHTML = ""
      clearRender()
      filtered.forEach(function (key:Place){
        renderSearchedBlock(key)
      })
    })
      .then(()=>{
        const favButton = [].slice.call(document.getElementsByClassName('favorites'))
        function classToggler(classToToggle, e) {

          console.log(e.target.nextElementSibling.currentSrc)
          let testData = Object.assign({}, e.path[4].dataset)
          let id = testData.id
          let name = testData.name
          let img = testData.img
          let newObj ={
            [id]:{}
          }
          let tesDataToFav = Object.assign(newObj[id], {id}, {img}, {name})


          if (compare(favourites, newObj))
          {

            delete favourites[id]
            e.target.classList.remove(classToToggle)
            localStorage.setItem('favourites', JSON.stringify(favourites))
            localStorage.setItem('favouritesAmount', JSON.stringify(Object.keys(favourites).length))

            return
          }
          {


            let newFav = Object.assign(favourites, newObj)
            localStorage.setItem('favourites', JSON.stringify(newFav))
            e.target.classList.add(classToToggle)


            localStorage.setItem('favouritesAmount', JSON.stringify(Object.keys(favourites).length))
            console.log(getFavouritesAmountData)
          }
        }
        favButton.forEach(button => {
          button.addEventListener('click', e => classToggler('active', e))
        })
      })
  }




export function renderSearchedBlock(data:Place){
    const dataInfoName: string = data.name
  const dataInfoId: number = data.id
  const dataInfoImg: string = data.image
  renderBlock2('search-results-block', `
  
                  <ul class="results-list" data-id="${dataInfoId}" data-name="${dataInfoName}" data-img="${dataInfoImg}">
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites id-${dataInfoId}" id="favouritesButton"></div>
            <img class="result-img" src="${dataInfoImg}" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p class="propName">${dataInfoName}</p>
              <p class="price">${data.price} &#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> ${data.remoteness} км от вас</div>
            <div class="result-info--descr">${data.description}</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
        `)


}

export function clearRender(){
  document.getElementById('search-results-block').innerHTML = ""
}

export function compare(obj1, obj2){

  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      return true;
    }
    return false
  }
}

