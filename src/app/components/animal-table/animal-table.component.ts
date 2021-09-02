import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { WildAnimal } from '../../models/wildAnimal.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-animal-table',
  templateUrl: './animal-table.component.html',
  styleUrls: ['./animal-table.component.scss']
})
export class AnimalTableComponent implements OnInit {
  @Input() animals!: (Pet | WildAnimal)[] | null;
  @Input() type: 'pet' | 'wild' = 'pet';
  @Output() addNewAnimal: EventEmitter<boolean> = new EventEmitter<boolean>();
  dataSource!: MatTableDataSource<Pet | WildAnimal>;
  displayedColumns: string[] = ['birthday', 'species', 'vaccinated'];

  constructor() { }

  ngOnInit(): void {
    if (this.animals) {
      this.dataSource = new MatTableDataSource(this.animals);
    }
  }

  addAnimal(): void {
    this.addNewAnimal.emit(true);
  }
}
