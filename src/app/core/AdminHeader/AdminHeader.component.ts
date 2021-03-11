import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { AdminMenuItems } from './admin-menu-items';

@Component({
  selector: 'app-admin-header',
  templateUrl: './AdminHeader.component.html',
  styleUrls: ['./AdminHeader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHeaderComponent implements OnInit {

  isLoggedIn: boolean = true;
  firstName: string;
  theatreId: number;
  
   constructor(public token: TokenStorageService){}

   ngOnInit(){
    this.isLoggedIn == !!this.token.getUser();
    if(this.isLoggedIn){
      this.firstName = this.token.getFirstName();
      this.theatreId = this.token.getTheatreId();
    }
   }

   ngAfterViewInit()
   {
   }

   logOut() : void{
    this.token.logOut();
   }

   

}
