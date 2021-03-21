import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AlertifyService } from '../shared/services/alertify.service';
import * as alertify from 'alertifyjs';
   
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private alertify: AlertifyService){}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        return next.handle(request)
                .pipe(
                    //retry(1),
                    catchError((error: HttpErrorResponse) => {
                        let errorMessage = '';
                        // client-side error
                        if(error.error instanceof ErrorEvent){
                            errorMessage = `Error ${error.error.message}`;
                        }
                        //server-side error
                        else {
                        switch (error.status) {
                            case 401: {
                                errorMessage = `Unauthorized Client: ${error.status}`;
                                break;
                            }
                            case 403: {
                                errorMessage = `Access Denied: ${error.status}`;
                                break;
                            }
                            case 404: {
                                errorMessage = `Not Found: ${error.status}`;
                                break;
                            }
                            case 422: {
                                errorMessage = `Unprocessable Entity: ${error.headers.get('error')}`;
                                break;
                            }
                            case 500: {
                                errorMessage = `Internal Server Error: ${error.status}`;
                                break;
                            }
                            default: {
                                errorMessage = `Unknown Server Error: ${error.status}`;
                                break;
                            }
                        }
                        console.log(errorMessage);
                        // let aloneMsg = JSON.parse(errorMessage).error[0];
                        // console.log('zastooo', aloneMsg);  
                        return throwError(errorMessage);     
                    }
                
                }
            )
        )}  
    }
    
