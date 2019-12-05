import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../api.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie
  @Output() updateMovie = new EventEmitter<Movie>()
  rateHovered = 0

  faCoffee = faCoffee; 
  faStar = faStar;  

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  rateHover(rate: number) {
  	//console.log(rate)
  	this.rateHovered = rate
  }

  rateClicked(rate: number) {
  	this.apiService.rateMovie(rate, this.movie.id).subscribe(
  		result => this.getDetails(rate),
  		error => console.log(error)
  	)
  }

  getDetails(rate: number) {
  	this.apiService.getMovie(this.movie.id).subscribe(
  		(movie: Movie) => {
  			this.updateMovie.emit(movie)
  		},
  		error => console.log(error)
  	)
  }

}
