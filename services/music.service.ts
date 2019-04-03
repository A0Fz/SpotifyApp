import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

const URL = "http://localhost:3000";
const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type' : 'application/json;charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})

export class MusicService {

  constructor(private http: HttpClient) { }

  getMusic(param:string = ""): any {
    return this.http.get<any>(`${URL}/musicas${param}`, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar a música'))
    )
  }

  getArtist(param:string = ""): any {
    return this.http.get<any>(` ${URL}/artista${param}`, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar Artista/Banda'))
    )
  }

  getAlbum(param:string = ""): any {
    return this.http.get<any>(` ${URL}/album${param}`, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar o Albúm'))
    )
  }

  private handleError<T>(Operator = 'operation', result?: T){         
    return (error:any):Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
