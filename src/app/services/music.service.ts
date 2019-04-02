import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

const URL_API = "http://localhost:3000/music";
const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type' : 'application/json;charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})

export class MusicService {

  constructor(private htttp: HttpClient) { }

  getMusic(param:string = ""): any {
    return this.htttp.get<any>(` ${URL_API}${param}`, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar a música'))
    )
  }

  getArtist(param:string = ""): any {
    return this.htttp.get<any>(` ${URL_API}${param}`, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar Artista/Banda'))
    )
  }

  getAlbum(param:string = ""): any {
    return this.htttp.get<any>(` ${URL_API}${param}`, httpOptions).pipe(
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
