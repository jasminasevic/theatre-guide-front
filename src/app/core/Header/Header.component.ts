import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { LoginStatusService } from 'src/app/shared/services/loginStatus.service';

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

   isLoggedIn: boolean = false;
   isLoginFailed: boolean = true;
   firstName: string;
   theatreId: string;

   constructor(private router: Router, 
      private token: TokenStorageService,
      private loginStatusService: LoginStatusService){}

   ngOnInit(){
      this.isLoggedIn = !!this.token.getUser();
      if(this.isLoggedIn && !!this.token.isExpired){
         this.isLoginFailed = false;
         this.firstName = this.token.getFirstName();
         this.theatreId = this.token.getTheatreId();
         this.loginStatusService.changeLoginStatus(true);
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

   logOut() : void {
      this.token.logOut();
      this.isLoginFailed = true;
      this.loginStatusService.changeLoginStatus(false);
   }

   ngAfterViewInit()
   {
     
   }
}
