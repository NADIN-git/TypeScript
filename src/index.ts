import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
//import { renderToast, getUserData, getFavoritesAmount } from './lib.js'
//import { renderToast, getUserData, getFavoritesAmount, saveUserDataInLocalStorage } from './lib.js'
//import { pskPrice } from './search-form.js'

const dobValue = 7

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Надежда', '../img/avatar.png', dobValue)  
  renderSearchFormBlock()
  renderSearchStubBlock()
  //if (dobValue === 0) {
  //  renderToast(
  //    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
  //    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  //  )
  //} else {
  //renderFetch(pskPrice)   
  //  //renderSearchResultsBlock(pskPrice)        
  //}   
})
