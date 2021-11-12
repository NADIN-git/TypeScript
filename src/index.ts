import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
//import { formatDate, getLastDayOfNextMonth, shiftDate } from './date_utils.js';


const dobValue = 7

if (typeof window !== undefined) {
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
