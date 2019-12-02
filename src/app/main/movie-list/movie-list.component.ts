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
  	this.apiService.getMovies().subscribe(
  		data => {
  			this.movies = data;
        console.log(data)
  		},
  		error => console.log(error)
  	);
  }

}
