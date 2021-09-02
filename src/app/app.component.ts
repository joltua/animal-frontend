import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public animalService: AnimalService) {
  }

  onAddAnimal() {

  }
}
