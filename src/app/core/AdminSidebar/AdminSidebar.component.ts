import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
declare var $ : any;

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './AdminSidebar.component.html',
  styleUrls: ['./AdminSidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminSidebarComponent implements OnInit {

   // sidebarIn : boolean = false;
   constructor(private token: TokenStorageService){}

   ngOnInit(){}

   ngAfterViewInit()
   {

   }

   logOut(){
      this.token.logOut();
   }

   toggleMenu()
   {
      if ( $('app-admin-panel').hasClass( "sidebar-in" ) ) {
         $('app-admin-panel').removeClass("sidebar-in");
      }
      else
      {
         $('app-admin-panel').addClass("sidebar-in");
      }
      // this.sidebarIn = !this.sidebarIn;
   }
}
