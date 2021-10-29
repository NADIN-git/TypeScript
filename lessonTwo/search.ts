import { SearchFormData } from './interface.js'

export function showHotels(entity: SearchFormData) {
    if (entity.numberHotels == null) {
        return 'Не найдены варианты по заданным параметрам'
    }

    const searchResult = Math.round(entity.numberHotels)
    let numberHotels = ''

    for (let i = 0; i < searchResult; i++) {
        numberHotels += '⭐'
    }

    return numberHotels + ` (${entity.numberHotels.toFixed(2)}. ${entity.hotelName})`
}