import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://127.0.0.1:8000/api/movies/"
  //baseUrl = "https://movie-rating-django.herokuapp.com/api/movies/"

  headers = new HttpHeaders({
  	'Content-Type': 'application/json',
  	'Authorization': 'Token 1b320772684ca7a2c722e09fc6296f1cf607972e'
  });

  private movies = ['Terminator', 'Transformer', 'Transpoter']

  constructor(private httpClient: HttpClient) { }

  getMovies() {
  	return this.httpClient.get<Movie[]>(this.baseUrl, {headers: this.headers})
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${this.baseUrl}${id}/`, {headers: this.headers})
  }

  createMovie(title: string, description: string) {
    const body = JSON.stringify({title, description})
    return this.httpClient.post(`${this.baseUrl}`, body, {headers: this.headers})
  }

  updateMovie(id: number, title: string, description: string) {
    const body = JSON.stringify({title, description})
    return this.httpClient.put(`${this.baseUrl}${id}/`, body, {headers: this.headers})
  }

  deleteMovie(id: number) {
    return this.httpClient.delete<Movie>(`${this.baseUrl}${id}/`, {headers: this.headers})
  }

  rateMovie(rate: number, movieId: number) {
    const body = JSON.stringify({stars: rate})
    return this.httpClient.post(`${this.baseUrl}${movieId}/rate_movie/`, body, {headers: this.headers})
  }
}
