import { Animal } from './animal.model';
import { Owner } from './owner.model';

export interface Pet extends Animal {
  owner: Owner;
}
