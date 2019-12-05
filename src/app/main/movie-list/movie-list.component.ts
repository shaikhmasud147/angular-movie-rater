import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[] = []
  @Output() selectedMovie = new EventEmitter<Movie>()
  @Output() editedMovie = new EventEmitter<Movie>()
  @Output() createdNewMovie = new EventEmitter()
  @Output() deletedMovie = new EventEmitter<Movie>()

  faEdit = faEdit //FavIcon
  faTrash = faTrash //FavIcon

  constructor() { }

  ngOnInit() {}

  /*Movie details*/
  movieClicked(movie: Movie) {
    //console.log(movie)
    this.selectedMovie.emit(movie)
  }

  /*Edit movie details*/
  editMovie(movie:Movie) {
    //console.log(movie)  
    this.editedMovie.emit(movie)
  }

  /*Trash movie details*/
  newMovie() {
    //console.log(movie)
    this.createdNewMovie.emit()
  }

  /*Trash movie details*/
  deleteMovie(movie: Movie) {
    //console.log(movie)
    this.deletedMovie.emit(movie)
  }

}
