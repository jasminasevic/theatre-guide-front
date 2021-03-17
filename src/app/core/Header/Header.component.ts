import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { InteractionService } from 'src/app/shared/services/interaction.service';

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
      private interactionService: InteractionService){}

   ngOnInit(){
      this.isLoggedIn = !!this.token.getUser();
      if(this.isLoggedIn && !!this.token.isExpired){
         this.isLoginFailed = false;
         this.firstName = this.token.getFirstName();
         this.theatreId = this.token.getTheatreId();
         this.interactionService.changeLoginStatus(true);
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
      this.interactionService.changeLoginStatus(false);
   }

   ngAfterViewInit()
   {
     
   }
}
