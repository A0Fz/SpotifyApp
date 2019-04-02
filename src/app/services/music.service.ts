import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

const URL_M = "http://localhost:3000/musicas";
const URL_A = "http://localhost:3000/artista";
const URL_B= "http://localhost:3000/album";
const httpOptions ={
  headers: new HttpHeaders({ 'Content-Type' : 'application/json;charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})

export class MusicService {

  constructor(private htttp: HttpClient) { }

  getMusic(param:string = ""): any {
    return this.htttp.get<any>(` ${URL_M}${param}`, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar a música'))
    )
  }

  getArtist(param:string = ""): any {
    return this.htttp.get<any>(` ${URL_A}${param}`, httpOptions).pipe(
      catchError(this.handleError<any>('Falha ao recuperar Artista/Banda'))
    )
  }

  getAlbum(param:string = ""): any {
    return this.htttp.get<any>(` ${URL_B}${param}`, httpOptions).pipe(
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
