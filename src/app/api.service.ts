import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://127.0.0.1:8000/api/movies/"

  headers = new HttpHeaders({
  	'Content-Type': 'application/json',
  	Authorization: 'Token token_id_here'
  })

  private movies = ['Terminator', 'Transformer', 'Transpoter']

  constructor(private httpClient: HttpClient) { }

  getMovies() {
  	//const dynamicMovies = this.httpClient.get(this.baseUrl)
  	//console.log(dynamicMovies)
  	//return this.movies;

  	return this.httpClient.get(this.baseUrl, {headers: this.headers})
  }
}
