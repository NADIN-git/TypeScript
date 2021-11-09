/**
 * Ответ с несколькими отелями
 */
export interface HotelListResponse {
  errorMessage?: string
  items: Hotels[]
}

/**
 * Ответ с одним отелем
 */
export interface HotelResponse {
  errorMessage?: string
  item: Hotels
}

/**
 * Структура брони
 */
export interface Hotels {
  id: number
  title: string
  details: string,
  town: Town[],  
  photos: object[],  
  bookedDates: object[],
  price: number
}

/**
 * Структура наименования города
 */
export interface Town {
  name: string
  place: string
}
