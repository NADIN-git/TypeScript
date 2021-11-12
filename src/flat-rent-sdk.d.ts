export interface database {
    id: number,
    title: string,
    details: string,
    photos: string[],
    coordinates: number[],
    bookedDates: Date[],
    price: number
}

export function cloneDate(date: Date): Date;

export function addDays(date: Date, days: number): Date;

export const backendPort: number;
export const localStorageKey: string;

export class FlatRentSdk {
  /**
         * Get flat by ID.
         * 
         * @param {string} id Flat ID.
         * @returns {Promise<Object|null>} Flat.
         */
  get(id: string): Promise<string|null>;

  /**
         * Search for flats.
         * 
         * @param {Object} parameters Search parameters
         * @param {string}parameters.city City name
         * @param {Date} parameters.checkInDate Check-in date
         * @param {Date} parameters.checkOutDate Check-out date
         * @param {number} [parameters.priceLimit] Max price for a night
         * @returns {Object[]} List of suitable flats.
         */
  search(parameters: {
         city?: string,
         checkInDate?: Date,
         checkOutDate?: Date,
         priceLimit?: number | null
  }): object[];

  /**
         * Book flat.
         * 
         * @param {number} flatId 
         * @param {Date} checkInDate 
         * @param {Date} checkOutDate
         * @returns {number}
         */
  book(flatId?: number, checkInDate?: Date, checkOutDate?: Date): object[];
}


