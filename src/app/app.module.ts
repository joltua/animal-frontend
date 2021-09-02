import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AnimalTableComponent } from './components/animal-table/animal-table.component';
import { AnimalTitlePipe } from './pipes/animal-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimalTableComponent,
    AnimalTitlePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
