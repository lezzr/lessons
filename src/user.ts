import { renderBlock } from './lib.js'

export interface userDataInterface {
  userName: unknown
  userAvatar: unknown
}

type favouritesAmountData = {
  favouriteItemAmount?: number
}



export const favourites = {

}

const favouritesAmountData: favouritesAmountData = {
  favouriteItemAmount: Object.keys(favourites).length || null
}

 const userData: userDataInterface = {
  userName: 'Wade Warren',
  userAvatar: '/img/avatar.png',
}
export const favouritesStorageService ={
  getFavouritesAmount: (): favouritesAmountData | null=>{
    const getFromStorage = localStorage.getItem('favouritesAmount')
    if (getFromStorage != null){
      return JSON.parse(getFromStorage) as favouritesAmountData
    }
    return null
  },
  setFavouritesAmount: (favouritesAmountData: favouritesAmountData)=>{
    localStorage.setItem('favouritesAmount', JSON.stringify(favouritesAmountData))
  }
}

export const userStorageService = {
  setUser: (userData: userDataInterface)=>{
    localStorage.setItem('user', JSON.stringify(userData))
  },
  getUser: (): userDataInterface | null=>{
    const getFromStorage = localStorage.getItem('user')
    let getData: unknown
    if (getFromStorage){
      getData = JSON.parse(getFromStorage)
    }
    if(typeof getData === "object"){
      return getData as userDataInterface
    }
    return null

  }
}
userStorageService.setUser(userData)
// localStorage.setItem('favouritesAmount', JSON.stringify(favouritesAmountData))
favouritesStorageService.setFavouritesAmount(favouritesAmountData)

export const getFavouritesAmountData =  favouritesStorageService.getFavouritesAmount()




export function renderUserBlock (userAvatar: userDataInterface['userAvatar'], userName: userDataInterface['userName'], getFavouritesAmountData: favouritesAmountData) {


  const favoritesCaption = getFavouritesAmountData ? getFavouritesAmountData : 'ничего нет'
  const hasFavoriteItems = getFavouritesAmountData ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${userAvatar} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
