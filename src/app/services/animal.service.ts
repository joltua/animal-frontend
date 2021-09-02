import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WildAnimal } from '../models/wildAnimal.model';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  getWildAnimals(): Observable<WildAnimal[]> {
    return of([
      {
        species: {
          label: 'Back-dog'
        },
        birthday: new Date(2000, 1, 1),
        trackingId: 1215,
        vaccinated: true
      }
    ]);
  }

  getPets(): Observable<Pet[]> {
    return of([
      {
        birthday: new Date(1998, 11, 26),
        species: { label: 'Бекендская дружелюбная' },
        vaccinated: true,
        owner: {
          fullName: 'Taras',
          address: {
            city: 'Alexandriya',
            street: 'Main street',
            country: 'Ukraine',
            zipCode: '28000'

          }
        }
      }
    ]);
  }
}
