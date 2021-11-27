import {renderBlock, renderBlock2} from './lib.js'
import {favourites, favouritesStorageService} from "./user.js";
import {Flat, FlatRentSdk, FlatWithTotalPrice} from './sdk/public/scripts/flat-rent-sdk.js';
// import {database} from '../sdk/public/scripts/flat-rent-sdk.js'

// import {renderSearchResultsBlock, renderSearchResultsBlock2} from "./search-results.js";
// let dbData;
// fetch('http://localhost:3100/places')
//   .then(r => r.json())
//   .then(r => dbData = r)
//   .then(()=>{
//     console.log(dbData.entries)

const flatRentSdk = new FlatRentSdk()

export interface SearchFormData{
  city: string
  checkInDate: Date | null
  checkOutDate: Date | null
  priceLimit: number
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
            <input id="city" type="text"  value="Санкт-Петербург" name="city" />
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
        <checkbox id="checkbox-api">api</checkbox>
        <checkbox id="checkbox-sdk">sdk</checkbox>    
    `
  )

  const searchButton = document.getElementById('searchButton2')
  if (searchButton != null){
        searchButton.onclick = ()=>{
      search(getSearchFormData(), getPlaces)
      console.log(dbData)

    }
  }

}

export function dateFormat(data: unknown): Date | null{
  if (typeof data === "string" || typeof data === "number"){
    return new Date(data)
  }
  return null
}

export function getSearchFormData(): SearchFormData{
  const formData = new FormData(document.querySelector<HTMLFormElement>('#search-form') || undefined)

  console.log(formData)
  return {
    city: formData.get('city') as string,
    checkInDate: dateFormat(formData.get('checkin')),
    checkOutDate: dateFormat(formData.get('checkout')),
    priceLimit: parseInt(formData.get('price') as string)
  }

}

export function mapObjToArray<T>(data: any): Array<T>{
  let array : Array<T> = []
  Object.keys(data).forEach(function (key){
    array.push(data[key])
      })
  return array
}
// export function filterResults(){
//  todo
// }


type GetPlacesStrategy  = (searchFormData: SearchFormData)=> Promise<FlatAndPlace[]>

type FlatAndPlace ={
  id: string,
  name: string
  description: string
  image: string
  remoteness: number | null
  bookedDates: string[]
  price: number
  coordinates: [number, number] | null
  }

const mapPlaceToFlatAndPlace = (place: Place) : FlatAndPlace=>{
  return {
    ...place,
    id: place.id.toString(),
    coordinates: null
  }
}

const mapFlatToFlatAndPlace = (flat: FlatWithTotalPrice) : FlatAndPlace=>{
    return {
    id: flat.id,
    price: flat.totalPrice,
    bookedDates: flat.bookedDates.map((value)=>{
      return value.toString()
    }),
    name: flat.title,
    description: flat.details,
    image: flat.photos[0],
    remoteness: null,
    coordinates: flat.coordinates
  }
}
// function initSortSelect(){
//   const sortSelect = document.getElementById('select-options')
//   if(!sortSelect){
//     return
//   }
//   sortSelect.addEventListener('onchange', (event)=>{
//     search(getSearchFormData(), getPlaces)
//   })

  // async () => {
  //
  //   const result = await getPlaces();
  //
  //   if(sortBy == 'price') {
  //     return result.sort()
  //   }
  //
  //
  // }
  // async () => {
  //
  //   const result = await getPlaces();
  //
  //   if(sortBy == 'price') {
  //     return result.sort(sortDirection == 'asc' ? sortPlacesAsc : sortPlacesDesc)
  //   }
  // return result
  //
  // }
// }

function renderSortBlock(){
  renderBlock2(
    'search-results-block',
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


async function getPlaces(searchFormData: SearchFormData) :Promise<FlatAndPlace[]>{
  debugger
  let dbA =[]
  const resultApi = await fetch('http://localhost:3100/places')
    .then(r => r.json())
  dbA = mapObjToArray<Place>(resultApi).map(mapPlaceToFlatAndPlace)

  const resultSdk = await flatRentSdk.search(searchFormData)
  const flatAndPlaceArray =  resultSdk.map(mapFlatToFlatAndPlace)

  dbA = dbA.concat(flatAndPlaceArray)
  return dbA
}

function classTogglerFavoritePlace(classToToggle:string, e: any) {


  let testData : Pick<Place, 'id' | 'name' | 'image'> = Object.assign({}, e.path[4].dataset)
  let targetObjectId = testData.id

  let newObj : Record<string, Pick<Place, 'id' | 'name' | 'image'>> ={
    [targetObjectId]:testData
  }



  if (compare(favourites, newObj))
  {

    delete favourites[targetObjectId];
    e.target.classList.remove(classToToggle)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    localStorage.setItem('favouritesAmount', JSON.stringify(Object.keys(favourites).length))

    return
  }



  let newFav = Object.assign(favourites, newObj)

  localStorage.setItem('favourites', JSON.stringify(newFav))
  e.target.classList.add(classToToggle)


  localStorage.setItem('favouritesAmount', JSON.stringify(Object.keys(favourites).length))
  // console.log(getFavouritesAmountData)

}

function renderSearchedBlockItems(data: FlatAndPlace[]){
  clearRender()
  renderBlock2(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    `
  )
  data.forEach(function (key:FlatAndPlace){
    renderSearchedBlock(key)
  })
}
function findElementsByClassName(className: any){
  return [].slice.call(document.getElementsByClassName(className))

}
function addEventListenerToElements(elements: any, event: any, callback: any){
  elements.forEach((element: { addEventListener: (arg0: any, arg1: any) => void; }) => {
    element.addEventListener(event, callback)
  })
}

export async function search(searchFormData: SearchFormData, getPlaces: GetPlacesStrategy){
  // debugger

  let dbA = await getPlaces(searchFormData)
  // const resultApi = await fetch('http://localhost:3100/places')
  //       .then(r => r.json())
  // dbA = mapObjToArray(resultApi)
  //
  // const resultSdk = await flatRentSdk.search(getSearchFormData)
  // console.log(resultSdk)
  // dbA = dbA.concat(resultSdk)
  // console.log(dbA)
  let filtered = dbA
    .filter(el => el.price <= searchFormData.priceLimit)
  // clearRender()
  // filtered.forEach(function (key:FlatAndPlace){
  //   renderSearchedBlock(key)
  // })

  renderSearchedBlockItems(filtered)

  const favButton = findElementsByClassName('favorites')


  addEventListenerToElements(favButton, 'click', (e: any)=> classTogglerFavoritePlace('active', e))

  }




export function renderSearchedBlock(data:FlatAndPlace){
    const dataInfoName: string = data.name
  const dataInfoId: string = data.id
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
  let element = document.getElementById('search-results-block')
  if(element){
    element.innerHTML = ""
  }
}

export function compare(sourceObj: { hasOwnProperty?: any; }, targetObj: Record<string, Pick<Place, "id" | "name" | "image">>){

  for (let key in targetObj) {
    if (sourceObj.hasOwnProperty(key)) {
      return true;
    }
    return false
  }
}

