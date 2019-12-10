import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../models/Movie';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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

  constructor(private apiService: ApiService,
              private cookieService: CookieService,
              private router: Router
            ) { }

  ngOnInit() {
    const mrToken = this.cookieService.get('mr-token')

    if(!mrToken){
      this.router.navigate(['/auth'])
    }else{
      this.apiService.getMovies().subscribe(
        (data: Movie[]) => {
            //console.log(data)
          this.movies = data
        },
        error => console.log(error)
      );      
    }

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
          this.movies = this.movies.filter(mov => mov.id !== movie.id)
      },
      error => console.log(error)
    );  
  }

  movieCreated(movie: Movie) {
    this.movies.push(movie)
    this.editedMovie = null
  }

  movieUpdated(movie: Movie) {
    const indx = this.movies.findIndex(mov => mov.id === movie.id)
    if(indx >= 0){
      this.movies[indx] = movie;
      this.editedMovie = null
    }
  }

}
