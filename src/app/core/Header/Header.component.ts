import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

   private _router: Subscription;
   url: string;

   isFixedClass : boolean = false; 

   isLoggedIn = false;
   isLoginFailed = true;
   firstName: string;

   constructor(private router: Router, 
      private token: TokenStorageService){}

   ngOnInit(){
      this.isLoggedIn = !!this.token.getUser();

      if(this.isLoggedIn){
         this.isLoginFailed = false;
         this.firstName = this.token.getFirstName();
      }
   }

   isFixedHeader()
   {
      if (this.url === '/listing/half-map/grid' || this.url === '/listing/half-map/list') {
         return true;
       } else {
         return false
       }
   }

   ngAfterViewInit()
   {
     
   }
}
