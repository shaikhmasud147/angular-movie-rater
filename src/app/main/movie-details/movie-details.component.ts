import { Component, OnInit, Input, Output } from '@angular/core';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie
  rateHovered = 0

  faCoffee = faCoffee; 
  faStar = faStar;  

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  rateHover(rate) {
  	//console.log(rate)
  	this.rateHovered = rate
  }

  rateClicked(rate) {
  	this.apiService.rateMovie(rate, this.movie.id).subscribe(
  		result => {
  			console.log(result)
  		},
  		error => console.log(error)
  	)
  }

}
