import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
   
export class HttpErrorInterceptor implements HttpInterceptor {
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
                   // errorMessage = `Error code: ${error.error}\nMessage: ${error.message}`;
                    switch (error.status) {
                        case 404: {
                            errorMessage = `Not Found: ${error.status}`;
                            break;
                        }
                        case 403: {
                            errorMessage = `Access Denied: ${error.status}`;
                            break;
                        }
                        case 422: {
                            errorMessage = `Unprocessable Entity: ${error.status}`;
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
                    window.alert(errorMessage);
                    return throwError(errorMessage);     
                }
            
            }
        )
    )}
}
    
