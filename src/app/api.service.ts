import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './models/Movie';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://127.0.0.1:8000/"
  baseMovieApiUrl = `${this.baseUrl}api/movies/`
  baseAuthUrl = `${this.baseUrl}auth/`
  //baseUrl = "https://movie-rating-django.herokuapp.com/api/movies/"

  headers = new HttpHeaders({
  	'Content-Type': 'application/json',
  	//'Authorization': 'Token 1b320772684ca7a2c722e09fc6296f1cf607972e',
  });

  private movies = ['Terminator', 'Transformer', 'Transpoter']

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService,
            ) { }

  getMovies() {
  	return this.httpClient.get<Movie[]>(this.baseMovieApiUrl, {headers: this.getAuthHeader()})
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(`${this.baseMovieApiUrl}${id}/`, {headers: this.getAuthHeader()})
  }

  createMovie(title: string, description: string) {
    const body = JSON.stringify({title, description})
    return this.httpClient.post(`${this.baseMovieApiUrl}`, body, {headers: this.getAuthHeader()})
  }

  updateMovie(id: number, title: string, description: string) {
    const body = JSON.stringify({title, description})
    return this.httpClient.put(`${this.baseMovieApiUrl}${id}/`, body, {headers: this.getAuthHeader()})
  }

  deleteMovie(id: number) {
    return this.httpClient.delete<Movie>(`${this.baseMovieApiUrl}${id}/`, {headers: this.getAuthHeader()})
  }

  rateMovie(rate: number, movieId: number) {
    const body = JSON.stringify({stars: rate})
    return this.httpClient.post(`${this.baseMovieApiUrl}${movieId}/rate_movie/`, body, {headers: this.getAuthHeader()})
  }

  loginUser(authData) {
    //console.log(authData)
    const body = JSON.stringify(authData)
    return this.httpClient.post(`${this.baseAuthUrl}`, body, {headers: this.headers})
  }

  getAuthHeader() {
    const tokenid = this.cookieService.get('mr-token')

    return new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'Token 1b320772684ca7a2c722e09fc6296f1cf607972e'
    'Authorization': `Token ${tokenid}`
  });
  }
}
