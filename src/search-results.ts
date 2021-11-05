import { renderBlock } from './lib.js'
//import { renderToast } from './lib.js'
import { toggleFavouriteItem } from './lib.js'

//export let changeFavorites = ''

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

<div class="result-container">
          <div class="result-img-container">
          <p>Ничего не найдено</p>
          </div>	     
     </div>`

let message = `
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


export function renderSearchResultsBlock(vPrice: number) {  

  interface Place {
    image: string,
    name: string,
    description: string,
    remoteness: number,
    bookedDates: number[],
    price: number,
  }

  fetch('http://localhost:3000/places')
    .then(response => response.text())
    .then((responseText) => {
      console.log(responseText)      
      const arr = responseText.split('}');
      for (let i = 1; i < arr.length; i++) {
        const arrPsk = arr[i].split('"')        
        const pricePsk = Number(arrPsk[22].slice(1))
        if (pricePsk <= vPrice) {
          //const fImg = "favorites active"
          const fImg = 'favorites'
          const inf = 'inf' + String(i)
          message = message + ` 
          <ul class="results-list">                                    
        <li class="result">
        <div class="result-container">
          <div id="${inf}" class="result-img-container"> 
            <div id="favorites" class="${fImg}"></div>
            <img class="result-img" src=${arrPsk[15]} alt="">
          </div>
          <div class="result-info">
            <div class="result-info--header">
              <p>${arrPsk[7]}</p>                            
              <p class="price">${arrPsk[22].slice(1)}&#8381;</p>                      
            </div>           
            <div class="result-info--descr">${arrPsk[11]}</div>
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
          plusFetch(message)
          //const form = document.getElementById('search-results-header');
          const form = document.getElementById(inf);
          toggleFavouriteItem(fImg)
          form.addEventListener('submit', (event) => {
            event.preventDefault()
            const favorites = document.getElementById('favorites')    
            const rfavorites = favorites.getAttribute('value')           
            console.log('kdfdkgf: ', rfavorites)            
          })
        } else {
          plusFetch(noMessage)
        }
      }
    })
}