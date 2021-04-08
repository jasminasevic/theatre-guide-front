import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TokenStorageService } from '../authentication/tokenStorage.service';
import { AlertifyService } from '../shared/services/alertify.service';
   
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private alertify: AlertifyService,
        private router: Router,
        private token: TokenStorageService){}

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
                            console.log(error.status);
                        switch (error.status) {
                            case 401: {
                                errorMessage = `Unauthorized Client`;
                                this.token.logOut();
                                break;
                            }
                            case 403: {
                                errorMessage = `Access Denied`;
                                break;
                            }
                            case 404: {
                                errorMessage = `Not Found`;
                                this.router.navigate(['not-found']);
                                break;
                            }
                            case 422: {
                                errorMessage = error.error.message;
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
                        return throwError(errorMessage);     
                    }
                
                }
            )
        )}  
    }
    
