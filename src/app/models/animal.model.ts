import { Species } from './species.model';

export interface Animal {
  birthday: Date;
  species: Species;
  vaccinated: boolean;
}
