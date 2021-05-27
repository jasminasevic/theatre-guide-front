import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { TheatresService } from 'src/app/theatres/theatres.service';
import { CheckIsTheatreDataAddeedService } from '../../shared/services/checkIsTheatreDataAddeed.service';
declare var $ : any;

@Component({
  selector: 'admin-theatre-sidebar',
  templateUrl: './AdminTheatreSidebar.component.html',
  styleUrls: ['./AdminTheatreSidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminTheatreSidebarComponent implements OnInit {

  // sidebarIn : boolean = false;
  constructor(private token: TokenStorageService,
   private theatreService: TheatresService,
   private checkIsTheatreDataAddeedService: CheckIsTheatreDataAddeedService){
      this.checkIsTheatreDataAddeedService.currentTheatreVisibilityStatus$.subscribe(
         data => {
            this.isVisible = data;
         }
      )
      this.checkIsTheatreDataAddeedService.currentSceneAddedStatus$.subscribe(
         data => {
            this.isSceneAdded = data;
         }
      )
      this.checkIsTheatreDataAddeedService.currentShowAddedStatus$.subscribe(
         data => {
            this.isShowAdded = data;
         }
      )
      this.checkIsTheatreDataAddeedService.currentRepertoireStatus$.subscribe(
         data => {
            this.isRepertoireAdded = data;
         }
      )
   }

   isVisible: boolean = false;
   isSceneAdded: boolean = false;
   isShowAdded: boolean = false;
   isRepertoireAdded: boolean = false;

  ngOnInit(){
     let theatreId = this.token.getTheatreId();

     this.theatreService.getTheatre(theatreId)
      .subscribe(data => {
         this.isVisible = data.isVisible;
         if(Object.keys(data.getSceneWithSectorsDtos).length != 0)
            this.isSceneAdded = true;
         if(Object.keys(data.showBaseInfoDtos).length != 0)
            this.isShowAdded = true;
         if(Object.keys(data.getRepertoireForTheatreDtos).length != 0)
            this.isRepertoireAdded = true;
      })
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
