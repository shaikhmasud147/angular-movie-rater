import { Component, OnInit, Input, Output } from '@angular/core';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie

  faCoffee = faCoffee; 
  faStar = faStar;  

  constructor() { }

  ngOnInit() {
  }

}
