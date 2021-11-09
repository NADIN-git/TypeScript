import { Town } from '../../domain/town.js'
import { Booking } from '../../domain/booking.js'
import { Provider } from '../../domain/provider.js'
import { SearchFilter } from '../../domain/search-filter.js'
import { HttpHelper } from '../../utils/http-helper.js'
import { HotelResponse, HotelListResponse, Hotels as HotelsBooking } from './response.js'

export class TrivagoProvider implements Provider {
  // имя провайдера, чтобы  установить источник бронирования
  public static provider = 'Trivago'
  // URL API 
  private static apiUrl = 'http://localhost:3000/places'

  /**
   * Логика преобразования объекта "отлель" из источника
   * в экземпляр Booking
   */
  private convertBookResponse(item: HotelsBooking): Booking {
    return new Booking(
      TrivagoProvider.provider,
      String(item.id),
      item.title,      
      Object(item.photos),
      item.details,
      Object(item.bookedDates),           
      item.price,
      new Town(
        item.town[0].name,
        item.town[0].place,
      )
    )
  }
  
  /**
   * Необходимо написать логику преобразования общего фильтра
   * в get-параметры текущего источника
   */
  private convertFilterToQueryString(filter: SearchFilter): string {
    return `search=${filter.name}` +
    `&town=${filter.name} ${filter.town.place}`
  }

  /**
   * Проходимся по каждому объекту и конвертируем его в экземпляр Booking
   */
  private convertBookListResponse(response: HotelListResponse): Booking[] {
    return response.items.map((item) => {
      return this.convertBookResponse(item)
    })
  }

  public find(filter: SearchFilter): Promise<Booking[]> {
    return HttpHelper.fetchAsJson<HotelListResponse>(

      
      TrivagoProvider.apiUrl + 
      // + '/book?' +
      // создадим соответствующую строку запроса из объекта фильтра
      this.convertFilterToQueryString(filter)
    )
      .then((response) => {
        // проверим, что ответ корректный
        this.assertIsValidResponse(response)
        // сконвертируем JSON-ответ в экземпляры Book
        return this.convertBookListResponse(response)
      })
  }

  public getById(id: string): Promise<Booking> {
    //return HttpHelper.fetchAsJson<BookResponse>(OstrovokProvider.apiUrl + '/book/' + id)
    return HttpHelper.fetchAsJson<HotelResponse>(TrivagoProvider.apiUrl + id)
      .then((response) => {
        // проверим, что с ответ корректный
        this.assertIsValidResponse(response)
        // сконвертируем JSON-ответ в экземпляр Book
        console.log(this.convertBookResponse(response.item));
        
        return this.convertBookResponse(response.item)
      })
  }

  /**
   * Данный провайдер не использует http коды для ответов
   * В случае ошибки, она содержится в errorMessage
   * Необходимо убедиться, что ответ не является ошибкой
   */
  private assertIsValidResponse(response: HotelListResponse | HotelResponse): void {
    if (response.errorMessage != null) {
      throw new Error(response.errorMessage)
    }
  }
}


 

  
 
   


