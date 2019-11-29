import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = []

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  	//this.movies = this.apiService.getMovies()
  	this.apiService.getMovies().subscribe(
  		data => {
  			this.movies = data
  		},
  		error => {
  			console.log(error)
  		}
  	)
  }

}
