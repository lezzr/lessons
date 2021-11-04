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

let favouritesAmountData: favouritesAmountData = {
  favouriteItemAmount: Object.keys(favourites).length
}

 const userData: userDataInterface = {
  userName: 'Wade Warren',
  userAvatar: '/img/avatar.png',
}
localStorage.setItem('favourites', JSON.stringify(favourites))
localStorage.setItem('user', JSON.stringify(userData))
localStorage.setItem('favouritesAmount', JSON.stringify(favouritesAmountData.favouriteItemAmount))

export const getUserData:userDataInterface = JSON.parse(localStorage.getItem('user'))

export const getFavouritesAmountData:favouritesAmountData = JSON.parse(localStorage.getItem('favouritesAmount'))





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
