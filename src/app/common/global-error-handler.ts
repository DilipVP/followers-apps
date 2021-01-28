import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NotFoundError } from './not-found-error';
import { PostService } from '../services/post.service';

@Injectable()
export class HttpErrorHandler implements HttpInterceptor {



  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


   return next.handle(httpRequest).pipe(
        retry(2), catchError((error: HttpErrorResponse) => {



            let errorMessage = '';
                                                    // For testing url with invalid path for data
            if ((error.error instanceof ErrorEvent) || error.status !== 404) {
           // server-side error
           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
           window.alert('An unxpectedErrorOccurred ' + errorMessage);
         }


            return throwError(error);
        })
    );
  }
}
