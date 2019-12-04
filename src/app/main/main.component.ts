import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Movie[] = []
  selectedMovie = null
  editedMovie = null
  deletedMovie = null

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	this.apiService.getMovies().subscribe(
  		(data: Movie[]) => {
	        //console.log(data)
	  		this.movies = data
  		},
  		error => console.log(error)
  	);
  }

  selectMovie(movie: Movie) {
  	//console.log("Selected movie: ", this.selectedMovie)
  	this.selectedMovie = movie
    this.editedMovie = null
    this.deletedMovie = null
  }

  editMovie(movie: Movie) {
    //console.log("Edit movie: ", this.editedMovie)
    this.editedMovie = movie
    this.selectedMovie = null
    this.deletedMovie = null
  }

  createNewMovie() {
    //console.log("Edit movie: ", this.editedMovie)
    this.editedMovie = {title: '', description: ''},
    this.selectedMovie = null
    this.deletedMovie = null
  }

  deleteMovie(movie: Movie) {
    //TODO Remove movie with API
    //console.log('delete: ', movie.title)
    this.apiService.deleteMovie(movie.id).subscribe(
      data => {
          //console.log(data)
          //this.movies = data
          return true
      },
      error => console.log(error)
    );  
  }

}
