import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ApiService } from '../api.service';

import { MainComponent } from './main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes = [
	{path: 'movies', component: MainComponent}
]

@NgModule({
  declarations: [
  	MainComponent,
  	MovieListComponent,
    MovieDetailsComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
   exports: [RouterModule],
   providers: [ApiService],
})
export class MainModule {}
