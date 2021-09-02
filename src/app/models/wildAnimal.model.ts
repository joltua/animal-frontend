import { Animal } from './animal.model';

export interface WildAnimal extends Animal {
  trackingId: number;
}
