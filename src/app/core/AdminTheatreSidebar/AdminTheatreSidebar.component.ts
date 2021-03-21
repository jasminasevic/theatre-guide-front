import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
declare var $ : any;

@Component({
  selector: 'admin-theatre-sidebar',
  templateUrl: './AdminTheatreSidebar.component.html',
  styleUrls: ['./AdminTheatreSidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminTheatreSidebarComponent implements OnInit {

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
     if ( $('theatre-admin-panel').hasClass( "sidebar-in" ) ) {
        $('theatre-admin-panel').removeClass("sidebar-in");
     }
     else
     {
        $('theatre-admin-panel').addClass("sidebar-in");
     }
     // this.sidebarIn = !this.sidebarIn;
  }

}