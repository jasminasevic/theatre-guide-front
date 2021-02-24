import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../authentication/tokenStorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenStorageService){}

    public getToken(): string {
        return this.tokenService.getToken();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.getToken();
        if(token != null){
            request = request.clone({
                setHeaders : {
                    Authorization: `Bearer ${this.getToken()}`
                }       
            });
        }
        return next.handle(request);
    }
}
