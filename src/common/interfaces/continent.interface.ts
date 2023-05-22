import { Country } from "./country.interface";

export interface Continent {
  code: string;
  name: string;
}
export interface ContinentWithWountry {
  code: string;
  name: string;
  countries: Country[];
}
