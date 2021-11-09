import { Town } from './town.js'

export class Booking {
  constructor(
    private readonly provider: string,    
    public readonly originalId: string,
    public readonly name: string,
    public readonly photos: object[],
    public readonly details: string,   
    public readonly bookedDates: object[],
    public readonly price: number,
    public readonly town: Town
  ) {}

  /**
   * Возможно совпадение ID в разных источниках
   * Поэтому генерируем ID для внутреннего использования
   * Настоящий ID также доступен через originalId
   */
  get id () {
    return this.provider + '-' + this.originalId
  }

  /**
   * Этот метод можно использовать для установления источника
   */
  public isProvidedBy(providerName: string): boolean {
    return this.provider === providerName
  }
}

