import { renderBlock } from './lib.js'
import { formatDate, getLastDayOfNextMonth, shiftDate } from './date_utils.js';
import { renderSearchResultsBlock } from './search-results.js'
import {FlatRentSdk, addDays, cloneDate} from './flat-rent-sdk.js'

//const sdk = new FlatRentSdk()
//const today = new Date()

//sdk.search({
//  city: 'Санкт-Петербург',
//  checkInDate: cloneDate(today),
//  checkOutDate: addDays(cloneDate(today), 1),
//  priceLimit: 4500
//})
//  .then((result) => {
//    console.log('serach with price limit', result)
//  })


export function renderSearchFormBlock(checkin?: Date, checkout?: Date): void {
  checkin = checkin || shiftDate(new Date(), 1)
  const selectedCheckin = formatDate(checkin);
  const selectedCheckout = formatDate(checkout || shiftDate(checkin, 2));
  const minCheckout = formatDate(new Date());
  const maxCheckout = formatDate(getLastDayOfNextMonth(new Date()));

  interface SearchFormData {
    city: string,
    checkin: Date,
    checkout: Date,
    price: number,
  }

  function searchItem(value: SearchFormData): void {    
    if (value.price != null) { 
      let arr = []
      fetch('http://localhost:3000/places')
        .then(response => response.text())
        .then((responseText) => {
          arr = JSON.parse(responseText)
          console.log(arr)
          //arr.sort((prev, next) => {
          //  if ( prev.price < next.price ) return -1;
          //  if ( prev.price < next.price ) return 1;
          //});
          //console.log(arr);          
          //arr.sort((prev, next) => prev.price - next.price);
          renderSearchResultsBlock(value.price, arr)      
        })      
    }
  }
  
  renderBlock(
    'search-form-block',
    `
    <form id='searchForm'>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>            
            <input id="city" type="text" name="city" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <div class="search-results-filter">
        <span>Поставщик:</span>
        <select>
            <option selected="">Поставщик 1</option>
            <option selected="">Поставщик 2</option>           
        </select>
    </div>
          <div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда </label>
            <input id="check-in-date" type="date" value=${selectedCheckin} min=${minCheckout} max=${maxCheckout}  name="checkin" />            
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${selectedCheckout} min=${minCheckout} max=${maxCheckout} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type='submit'>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
  const form = document.getElementById('searchForm')
  const checkinElement = document.getElementById('check-in-date')
  const checkoutElement = document.getElementById('check-out-date')
  const priceElement = document.getElementById('max-price')

  checkinElement.addEventListener('change', function (event) {
    checkinElement.setAttribute('value', (event.target as HTMLInputElement).value);
  });
  checkoutElement.addEventListener('change', function (event) {
    checkoutElement.setAttribute('value', (event.target as HTMLInputElement).value);
  });
  priceElement.addEventListener('change', function (event) {
    priceElement.setAttribute('value', (event.target as HTMLInputElement).value)
  })
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const city = document.getElementById('city')    
    searchItem({
      'city': city.getAttribute('value'),
      'checkin': new Date(checkinElement.getAttribute('value')),
      'checkout': new Date(checkoutElement.getAttribute('value')),
      'price': +priceElement.getAttribute('value')
    })    
    return searchItem;
  })
}

