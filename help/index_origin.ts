import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderSearchResultsBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { renderBlock } from './lib.js'
import { renderFetch } from './search-results.js'
import { pskPrice } from './search-form.js'

let dobValue = 0

if (localStorage.getItem('dobValue')) {
  dobValue = parseInt(localStorage.getItem('dobValue'))
}

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Надежда', '../img/avatar.png', dobValue)  
  renderSearchFormBlock()
  //renderSearchStubBlock()
  if (dobValue === 0) {
    renderToast(
      { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
      { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )
  } else {
    renderFetch(10000)
    //renderSearchResultsBlock(pskPrice)        
  }   
})
//<p>${responseText.slice(0, 80) + '...'}</p>  
//<p>${arr[4]}</p>    