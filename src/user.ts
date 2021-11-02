import { renderBlock } from './lib.js'

export interface userDataInterface {
  userName: unknown
  userAvatar: unknown
}

type favouritesAmountData = {
  favouriteItemAmount?: unknown
}

const favouritesAmountData: favouritesAmountData = {
  favouriteItemAmount: 3
}

const userData: userDataInterface = {
  userName: 'Wade Warren',
  userAvatar: '/img/avatar.png',
}

localStorage.setItem('user', JSON.stringify(userData))
localStorage.setItem('favouritesAmount', JSON.stringify(favouritesAmountData))

export const getUserData:userDataInterface = JSON.parse(localStorage.getItem('user'))

export const getFavouritesAmountData:favouritesAmountData = JSON.parse(localStorage.getItem('favouritesAmount'))




export function renderUserBlock (userAvatar: userDataInterface['userAvatar'], userName: userDataInterface['userName'], favouritesAmount: favouritesAmountData) {
  // const userName:userData = getUserData.userAvatar

  const favoritesCaption = favouritesAmountData.favouriteItemAmount ? favouritesAmountData.favouriteItemAmount : 'ничего нет'
  const hasFavoriteItems = favouritesAmountData.favouriteItemAmount ? true : false

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
