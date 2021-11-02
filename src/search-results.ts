import { renderBlock } from './lib.js'
import { pskPrice } from './search-form.js'

console.log('search: '+ pskPrice);

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

export function renderSearchResultsBlock(price: number) {        
    fetch('http://localhost:3000/places')
        .then(response => response.text())
    // укажем тип результата в этом месте
        .then ((responseText) => {  
            const arr = responseText.split('}');  
            for (let i = 1; i < 3; i++) {
                const arrPsk = arr[i].split('"')
                console.log('Вошла в цикл '+arrPsk)
                renderBlock('search-results-block',         
                    `  
                    <ul class="results-list">                 
                    <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            <img class="result-img" src="./img/result-1.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>${arrPsk[7]}</p>                            
              <p class="price">${arrPsk[22].slice(1)}&#8381;</p>
              <p class="price">${price}&#8381;</p>              
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
                )
            }   
        }) 
}       

