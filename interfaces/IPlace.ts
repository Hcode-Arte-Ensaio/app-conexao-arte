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
  favorite: boolean;
}
