import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { INews } from '../interface/news';
import { Observable } from 'rxjs';
import { Icategory } from '../interface/category';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _urlNewAPI: string = 'http://localhost:8080/api/news';
  private _urlGetCategory: string = 'http://localhost:8080/api/categorys';
  constructor(private http: HttpClient) { }

  public getNews(): Observable<INews[]>{
    return this.http.get<INews[]>(this._urlNewAPI)
    .pipe(catchError(this.errorHandler));
  }
  public getCategory(): Observable<Icategory[]>{
      return this.http.get<Icategory[]>(this._urlGetCategory)
      .pipe(catchError(this.errorHandler));
  }
  
    public createNew(employee) {
      return this.http.post<INews[]>(this._urlNewAPI, employee)
      .pipe(catchError(this.errorHandler));
    }

    public errorHandler(error: HttpErrorResponse) {
      return throwError(error)
    }
  
}
