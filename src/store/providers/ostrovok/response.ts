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
  name: string
  description: string,
  town: Town[],  
  image: string,
  remoteness: number,
  bookedDates: string[],
  price: number
}

/**
 * Структура наименования города
 */
export interface Town {
  name: string
  place: string
}
