
import {
  HttpErrorResponse,
  HttpClient
 } from '@angular/common/http';
import { error } from 'protractor';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(){

    return this.http.get(this.url, {responseType: 'json'})
     .pipe(
     retry(1),
     catchError(this.errorHandler));

   }

   getResource(id: any){

     return this.http.get(this.url + '/' + id, {responseType: 'json'})
     .pipe(

       catchError(this.errorHandler));
   }

   create(resource: any){
     return this.http.post(this.url, resource, {responseType: 'json'})
     .pipe(
       retry(1),
       catchError(this.errorHandler));
   }

   update(resource: any, params: any){
             // We can use patch here
             return   this.http.put(this.url + '/' + resource.id, params, {responseType: 'json'})
             .pipe(
              catchError(err => throwError(new AppError(err)))
            );
   }

   delete(id: any){
       return this.http.delete(this.url + '/' + id, {params: id})
       .pipe(
         catchError(this.errorHandler)
       );
   }

  private  errorHandler(err: HttpErrorResponse){

     if (err.status === 400) {
     return throwError(new NotFoundError());
     }

     if (err.status === 404) {
     return throwError(new NotFoundError(err));
     }
     console.log(err.error);

     return throwError(new AppError(err));

   }
}
