import { renderBlock } from './lib.js'
import { formatDate, getLastDayOfNextMonth, shiftDate } from './date_utils.js';
import { renderSearchResultsBlock } from './search-results.js'
import {FlatRentSdk, addDays, cloneDate} from './flat-rent-sdk.js'


const sdk = new FlatRentSdk()
const today = new Date()

interface  Booking {
  name: string,      
  image: [],
  description: string,
  price: number,      
}

interface  Trivago {
  id: string,
  title: string,
  details: string,
  photos: [],
  coordinates: [],
  bookedDates: [],
  price: number
}

interface Ostrovok {
  image: [],
  name: string,
  description: string,
  remoteness: number,
  bookedDates: number[],
  price: number,
}

let itogItem: Booking[] = []

export function sendResultsTrivago(arrProvider: Trivago[]) {  
  console.log('Вошла в sendResultsTrivago');
  console.log(arrProvider); 

  for (let i = 0; i <= arrProvider.length-1; i++) {  
    itogItem.push({
      name: arrProvider[i].title,
      description: arrProvider[i].details,
      image: arrProvider[i].photos,
      price: arrProvider[i].price,
    })    
  }   
  console.log('Итог Trivago: ', itogItem); 
}

export function sendResultsOstrovok(ostrovokProvider: Ostrovok[]) {    
  console.log('Вошла в sendResultsOsrovok');
  console.log(ostrovokProvider); 

  for (let i = 0; i <= 10; i++) {  
    itogItem.push({
      name: ostrovokProvider[i].name,
      description: ostrovokProvider[i].description,
      image: ostrovokProvider[i].image,
      price: ostrovokProvider[i].price,
    })    
    console.log('Промежуток: ',itogItem);
  }   
  console.log('Итог Ostrovok: ', itogItem);   
}

export function renderSearchFormBlock(checkin?: Date, checkout?: Date): void {  
  checkin = checkin || shiftDate(new Date(), 1)
  const selectedCheckin = formatDate(checkin);
  const selectedCheckout = formatDate(checkout || shiftDate(checkin, 2));
  const minCheckout = formatDate(new Date());
  const maxCheckout = formatDate(getLastDayOfNextMonth(new Date()));

  interface SearchFormData {
    city: string | null,
    checkin: Date | null,
    checkout: Date | null,
    price: number | null,
  }  
 
  function searchItem(value: SearchFormData): void {    
    itogItem = []
    //sdk.book('ab2e2', cloneDate(today), addDays(cloneDate(today), 2))
    //  .then((result: []) => {
    //    console.log('book flat', result)
    //    sdk.search({
    //    //city: 'Санкт-Петербург',
    //    //checkInDate: cloneDate(today),
    //    //checkOutDate: addDays(cloneDate(today), 3),
    //      priceLimit: value.price
    //    })
    //      .then((result: string[]) => {
    //        sendResultsTrivago(result)             
    //      })
    //  })

    //renderSearchResultsBlock(value.price, itogItem)

    fetch('http://localhost:3000/places')      
      .then(response => response.text())
      .then((responseText) => {
        let arrayPlaces = []
        arrayPlaces = JSON.parse(responseText)  
        console.log('Fetch:', arrayPlaces)
        //sendResultsOstrovok(arrayPlaces)   
        if (value.price != null) {
          renderSearchResultsBlock(value.price, arrayPlaces)      
        }                 
      })  

    //if (value.price != null) {
    //  renderSearchResultsBlock(value.price, itogItem)      
    //}    
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
  if (checkinElement != undefined  && checkoutElement != null &&
    priceElement != null && form != undefined) {
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
      const r_checkin = checkinElement.getAttribute('value')   
      const r_checkout = checkoutElement.getAttribute('value') 
      const r_price = priceElement.getAttribute('value') 
      if (r_checkin != null && city != null && r_checkout != null && r_price != null) {
        searchItem({     
          'city': city.getAttribute('value'), 
          'checkin': new Date(r_checkin),
          'checkout': new Date(r_checkout),
          'price': +r_price                  
        })    
      }
      return searchItem;
    })
  }
}