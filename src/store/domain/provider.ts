import { Booking } from './booking.js'
import { SearchFilter } from './search-filter.js'

/**
 * Каждый источник должен уметь искать по фильтрам и получить книгу по ID
*/
export interface Provider {
  /**
   * Источник получает фильтр в общем виде и сам должен преобразовать его в свой формат
   * Источник также должен конвертировать свой ответ в объекты книг
   */
  find(filter: SearchFilter): Promise<Booking[]>
  getById(id: string): Promise<Booking>
}