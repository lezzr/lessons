export interface SearchParameters {
  city: string;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  priceLimit: number;
}

export interface Flat {
  id: string;
  title: string;
  details: string;
  photos: string[];
  coordinates: [number, number];
  bookedDates: number[];
  price: number;
}
export type FlatWithTotalPrice = Omit<Flat, 'price'> & {totalPrice: number}

export function cloneDate(date: Date): Date;
export function addDays(date: Date, days: number): any;


export class FlatRentSdk {

  get(id: string): Promise<FlatWithTotalPrice>;

  search(parameters: SearchParameters): FlatWithTotalPrice[];

  book(flatId: number, checkInDate: Date, checkOutDate: Date): number;

}
