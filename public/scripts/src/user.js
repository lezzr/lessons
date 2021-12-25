import { renderBlock } from './lib.js';
export const favourites = {};
const favouritesAmountData = {
    favouriteItemAmount: Object.keys(favourites).length || null
};
const userData = {
    userName: 'Wade Warren',
    userAvatar: '/img/avatar.png',
};
export const favouritesStorageService = {
    getFavouritesAmount: () => {
        const getFromStorage = localStorage.getItem('favouritesAmount');
        if (getFromStorage != null) {
            return JSON.parse(getFromStorage);
        }
        return null;
    },
    setFavouritesAmount: (favouritesAmountData) => {
        localStorage.setItem('favouritesAmount', JSON.stringify(favouritesAmountData));
    }
};
export const userStorageService = {
    setUser: (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
    },
    getUser: () => {
        const getFromStorage = localStorage.getItem('user');
        let getData;
        if (getFromStorage) {
            getData = JSON.parse(getFromStorage);
        }
        if (typeof getData === "object") {
            return getData;
        }
        return null;
    }
};
userStorageService.setUser(userData);
// localStorage.setItem('favouritesAmount', JSON.stringify(favouritesAmountData))
favouritesStorageService.setFavouritesAmount(favouritesAmountData);
export const getFavouritesAmountData = favouritesStorageService.getFavouritesAmount();
export function renderUserBlock(userAvatar, userName, getFavouritesAmountData) {
    const favoritesCaption = getFavouritesAmountData ? getFavouritesAmountData : 'ничего нет';
    const hasFavoriteItems = getFavouritesAmountData ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src=${userAvatar} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
