import { renderBlock } from './lib.js'
//import { renderToast } from './lib.js'
//import { toggleFavouriteItem } from './lib.js'

export let changeFavorites = ''

export function renderSearchStubBlock() {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock(reasonMessage) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

function plusFetch(name: string) {
  const obj = name
  renderBlock('search-results-block', obj)
}


const noMessage = `
<div class="search-results-header">
    <p>Результаты поиска</p>
    <div class="search-results-filter">
        <span><i class="icon icon-filter"></i> Сортировать:</span>
        <select>
            <option selected="">Сначала дешёвые</option>
            <option selected="">Сначала дорогие</option>
            <option>Сначала ближе</option>
        </select>
    </div>
</div>
<div class="result-container">
          <div class="result-img-container">
          <p>Ничего не найдено</p>
          </div>	     
     </div>`

const message = `
<div class="search-results-header">
    <p>Результаты поиска</p>
    <div class="search-results-filter">
        <span><i class="icon icon-filter"></i> Сортировать:</span>
        <select>
            <option selected="">Сначала дешёвые</option>
            <option selected="">Сначала дорогие</option>
            <option>Сначала ближе</option>
        </select>
    </div>
</div>`

interface Place {
  image: string,
  name: string,
  description: string,
  remoteness: number,
  bookedDates: number[],
  price: number,
}

export function renderSearchResultsBlock(vPrice: number, arr: Place[]) {   
  let pskMessage = message
  for (let i = 1; i <= 10; i++) {          
    const pricePsk = arr[i].price
    console.log(pricePsk)
    if (pricePsk <= vPrice) {     
      const fImg = 'favorites'
      pskMessage = pskMessage + ` 
          <ul class="results-list">                                    
        <li class="result">
        <div class="result-container">
          <div class="result-img-container"> 
            <div id="favorites" class="${fImg}"></div>
            <img class="result-img" src=${arr[i].image} alt="">
          </div>
          <div class="result-info">
            <div class="result-info--header">
            <p>${arr[i].name}</p>                            
            <p class="price">${arr[i].price}&#8381;</p>                      
            </div>           
            <div class="result-info--descr">${arr[i].description}</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      </ul>
    `
      plusFetch(pskMessage)
      //const form = document.getElementById('search-results-header');
      const favoritesElement = document.getElementById('favorites')
      favoritesElement.addEventListener('change', function (event) {
        favoritesElement.setAttribute('value', (event.target as HTMLInputElement).value);
      })
      favoritesElement.addEventListener('submit', (event) => {
        event.preventDefault()
        changeFavorites = favoritesElement.getAttribute('value')
        ///console.log("kdfdkgf: ", changeFavorites)
        //toggleFavouriteItem()
      })
    } 
  }
    
}