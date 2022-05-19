/*
export interface IPlace {
    id: string;
    name: string;
    site: string;
    address: string;
    image: string;
    ticket: string;
    description: string;
    status: string;
    categoryId: string[];
}
*/

export interface IPlace {
  id: number;
  name: string;
  site: string;
  address: string;
  image: string;
  ticket?: string;
  neighbor?: string;
  description: string;
  categoryId: number[];
}
