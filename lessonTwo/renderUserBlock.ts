import { dataUser } from './getUserData.js'
import { dataFavorites } from './getFavoritesAmount.js'

export function renderUserBlock(user: object, favorites?: number): void {
    dataUser(user)
    dataFavorites(favorites)
}