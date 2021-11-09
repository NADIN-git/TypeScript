import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
//import { formatDate, getLastDayOfNextMonth, shiftDate } from './date_utils.js';

//import {FlatRentSdk, addDays, cloneDate} from '../public/scripts/flat-rent-sdk.js'

//import { Town } from './store/domain/town.js'
//import { Booking } from './store/domain/booking.js'
//import { SearchFilter } from './store/domain/search-filter.js'
//import { TrivagoProvider } from './store/providers/trivago/trivago-provider.js'
//import { OstrovokProvider } from './store/providers/ostrovok/ostrovok-provider.js'

//const trivago = new TrivagoProvider()
//console.log(trivago)
//const ostrovok = new OstrovokProvider()
//
//// создаём общий фильтр для всех источников
//const filter: SearchFilter = {
//  name: 'trivago',
//  town: new Town('Санкт-Петербург','')
//}
//
//// описываем логику сортировки по цене
//function sortByPrice(one: Booking, two: Booking) {
//  if (one.price > two.price) {
//    return 1
//  } else if (one.price < two.price) {
//    return -1
//  } else {
//    return 0
//  }
//}
//
//// запрашиваем разные источники по единому протоколу
//Promise.all([
//  trivago.find(filter),
//  ostrovok.find(filter)
//]).then((results) => {
//  // мерджим все результаты в один
//  const allResults: Booking[] = [].concat(results[0], results[1])
//  console.log(allResults)
//  // работаем с ними как с единым целым
//  allResults.sort(sortByPrice)
//})


//const sdk = new FlatRentSdk()
//const today = new Date()

//sdk.book(Number('ab2e2'), cloneDate(today), addDays(cloneDate(today), 2))
//  .then((result) => {
//    console.log('book flat', result)
//
//    sdk.search({
//      city: 'Санкт-Петербург',
//      checkInDate: cloneDate(today),
//      checkOutDate: addDays(cloneDate(today), 3)
//    })
//      .then((result) => {
//        console.log('serach after booking', result, result.length)
//      })
//  })


//import { FlatRentSdk } from './flat-rent-sdk.js'

//const flatRentSdk = new FlatRentSdk();

//flatRentSdk.book(formatDate, shiftDate,);



//import { renderToast, getUserData, getFavoritesAmount } from './lib.js'
//import { renderToast, getUserData, getFavoritesAmount, saveUserDataInLocalStorage } from './lib.js'
//import { pskPrice } from './search-form.js'

const dobValue = 7

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {      
    renderUserBlock('Надежда', '../img/avatar.png', dobValue)  
    renderSearchFormBlock()
    renderSearchStubBlock()
  })
} else {
  console.log('window не определен')
}

//if (dobValue === 0) {
//  renderToast(
//    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
//    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
//  )
//} else {
//renderFetch(pskPrice)   
//  //renderSearchResultsBlock(pskPrice)        
//}   
