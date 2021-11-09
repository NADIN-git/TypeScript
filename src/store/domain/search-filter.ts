import { Town } from './town.js'


/**
 * Протокол фильтра, с которым должен работать каждый провайдер
 */
export interface SearchFilter {
  name: string
  town?: Town  
}
