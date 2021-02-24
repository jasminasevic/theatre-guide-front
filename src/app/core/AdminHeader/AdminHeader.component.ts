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

   constructor(public adminMenuItems: AdminMenuItems,
    public token: TokenStorageService){}

   ngOnInit(){}

   ngAfterViewInit()
   {
   }

   logOut() : void{
    this.token.logOut();
   }

   

}
