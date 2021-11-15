export interface SearchParameters {
  city: string;
  checkInDate: Date;
  checkOutDate: Date;
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


export function cloneDate(date: Date): Date;
export function addDays(date: Date, days: number);


export class FlatRentSdk {

  get(id: string): Promise<Flat>;

  search(parameters: SearchParameters): Flat[];

  book(flatId: number, checkInDate: Date, checkOutDate: Date): number;

}
